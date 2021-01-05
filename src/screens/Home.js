import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, ScrollView, StatusBar} from 'react-native';

import ImageHeader from '../components/ImageHeader/ImageHeader';
import ProductCard from '../components/ProductCard/ProductCard';
import HeadlineText from '../components/HeadlineText/HeadlineText';

const Home = ({navigation}) => {
  const [products, setProducts] = useState({});
  const [productsPopular, setProductsPopular] = useState({});
  const url = 'http://192.168.8.100:3000/products';

  useEffect(() => {
    axios
      .get(url + '?page=1&limit=8')
      .then(({data}) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(url + '/popular?page=1&limit=8')
      .then(({data}) => setProductsPopular(data))
      .catch((err) => console.log(err));
  }, []);

  // console.log('Outside render..', products);

  return (
    <View>
      <ScrollView>
        <StatusBar translucent backgroundColor="transparent" />
        <ImageHeader />
        <HeadlineText condition="New" desc="You’ve never seen it before!" />
        <ScrollView horizontal style={{flexDirection: 'row'}}>
          {products.products &&
            products.products.map((product) => {
              let img = product.image.split(',');
              console.log(img[0]);
              return (
                <ProductCard
                  navigation={navigation}
                  key={product.id}
                  imgUrl={img[0].replace('localhost', '192.168.8.100')}
                  name={product.product_name}
                  brand={product.product_brand}
                  price={product.product_price}
                  id={product.id}
                />
              );
            })}
        </ScrollView>
        <HeadlineText
          condition="Popular"
          desc="You may missed it, but it's our popular products"
        />
        <ScrollView horizontal style={{flexDirection: 'row'}}>
          {productsPopular.products &&
            productsPopular.products.map((product) => {
              let img = product.image.split(',');
              console.log(product.id);
              return (
                <ProductCard
                  key={product.id}
                  imgUrl={img[0].replace('localhost', '192.168.8.100')}
                  name={product.product_name}
                  brand={product.product_brand}
                  price={product.product_price}
                />
              );
            })}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;
