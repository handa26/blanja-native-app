import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, ScrollView, StatusBar, Text} from 'react-native';
import {API_URL_DEVELOPMENT} from '@env';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import ImageHeader from '../../components/ImageHeader/ImageHeader';
import ProductCard from '../../components/ProductCard/ProductCard';
import HeadlineText from '../../components/HeadlineText/HeadlineText';

const Home = ({navigation}) => {
  const [products, setProducts] = useState({});
  const [productsPopular, setProductsPopular] = useState({});
  const url = `${API_URL_DEVELOPMENT}/products`;

  useEffect(() => {
    axios
      .get(url + '?page=1&limit=8')
      .then(({data}) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, [url]);

  useEffect(() => {
    axios
      .get(url + '/popular?page=1&limit=8')
      .then(({data}) => setProductsPopular(data))
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <View>
      <ScrollView>
        <StatusBar translucent backgroundColor="transparent" />
        <ImageHeader navigation={navigation} />
        <View style={{flexDirection: 'row'}}>
          <HeadlineText condition="New" desc="You’ve never seen it before!" />
          <Text
            onPress={() => navigation.navigate('NewProducts')}
            style={{left: wp('40%'), top: hp('7%'), fontSize: hp('1.8%')}}>
            View all
          </Text>
        </View>
        <ScrollView horizontal style={{flexDirection: 'row'}}>
          {products.products &&
            products.products.map((product) => {
              let img = product.image.split(',');
              return (
                <ProductCard
                  navigation={navigation}
                  key={product.id}
                  imgUrl={API_URL_DEVELOPMENT + img[0]}
                  name={product.product_name}
                  brand={product.product_brand}
                  price={product.product_price}
                  id={product.id}
                />
              );
            })}
        </ScrollView>
        <View style={{flexDirection: 'row'}}>
          <HeadlineText
            condition="Popular"
            desc="You may missed it, but it's our popular products"
          />
          <Text
            onPress={() => navigation.navigate('PopularProducts')}
            style={{left: wp('8.5%'), top: hp('7%'), fontSize: hp('1.8%')}}>
            View all
          </Text>
        </View>
        <ScrollView horizontal style={{flexDirection: 'row'}}>
          {productsPopular.products &&
            productsPopular.products.map((product) => {
              let img = product.image.split(',');
              return (
                <ProductCard
                  key={product.id}
                  imgUrl={API_URL_DEVELOPMENT + img[0]}
                  name={product.product_name}
                  brand={product.product_brand}
                  price={product.product_price}
                  id={product.id}
                  navigation={navigation}
                />
              );
            })}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;
