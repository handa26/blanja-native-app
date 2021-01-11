import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Spinner} from 'native-base';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import ProductCard from '../components/ProductCard/ProductCard';

const Catalog = ({navigation, route}) => {
  const {categoryName, title} = route.params;
  const [products, setProducts] = useState({});
  const url = `http://192.168.8.101:3000/search?category=${categoryName}`;

  useEffect(() => {
    axios
      .get(url + '&sortby=latest&sort=asc&page=1&limit=10')
      .then(({data}) => setProducts(data))
      .catch((err) => console.log(err));
  }, [setProducts, url]);

  // console.log(products);

  return (
    <ScrollView>
      <CustomHeader
        leftIcon="arrow-left"
        leftIconRoute={() => navigation.goBack()}
        name={title}
        rightIcon="search"
        rightIconRoute={() => navigation.navigate('Search')}
      />
      <View style={styles.productsWrapper}>
        {products.products ? (
          products.products &&
          products.products.map((product) => {
            let img = product.image.split(',');
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
          })
        ) : (
          <Spinner />
        )}
      </View>
    </ScrollView>
  );
};

export default Catalog;

const styles = StyleSheet.create({
  productsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
});
