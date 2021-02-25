import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Spinner} from 'native-base';
import ProductCard from '../ProductCard/ProductCard';
import CustomHeader from '../CustomHeader/CustomHeader';
import {API_URL_DEVELOPMENT} from '@env';

const NewProducts = ({navigation, route}) => {
  const [products, setProducts] = useState({});
  const url = `${API_URL_DEVELOPMENT}/products`;

  useEffect(() => {
    axios
      .get(url + '?page=1&limit=15')
      .then(({data}) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <ScrollView>
      <CustomHeader
        leftIcon="arrow-left"
        leftIconRoute={() => navigation.goBack()}
        name={route.params ? 'All Products' : 'New Products'}
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
                imgUrl={API_URL_DEVELOPMENT + img[0]}
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

export default NewProducts;

const styles = StyleSheet.create({
  productsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
});
