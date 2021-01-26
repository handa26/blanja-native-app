import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ScrollView, View, Text, StyleSheet, Image} from 'react-native';
import {Spinner} from 'native-base';
import ProductCard from '../components/ProductCard/ProductCard';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import bags from '../assets/icons/bags.png';
import {API_URL_DEVELOPMENT, IP_DEVELOPMENT} from '@env';

const Favorite = ({navigation}) => {
  const [productsPopular, setProductsPopular] = useState({});
  const url = `${API_URL_DEVELOPMENT}products`;

  useEffect(() => {
    axios
      .get(url + '/popular?page=1&limit=15')
      .then(({data}) => setProductsPopular(data))
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <ScrollView>
      <CustomHeader
        name="Wishlist"
        leftIcon="arrow-left"
        leftIconRoute={() => navigation.goBack()}
        rightIcon="cart-plus"
      />
      <View style={{height: 450}}>
        <View>
          <Image source={bags} style={styles.image} />
          <View style={{left: 55, top: 100}}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#DB3022'}}>
              Wishlist
            </Text>
            <Text style={{width: 300, fontSize: 18}}>
              Save and compare with your favorite product in one place.
            </Text>
          </View>
        </View>
      </View>
      <Text style={{marginVertical: 15, fontSize: 24, marginLeft: 15}}>
        Recommendation for you
      </Text>
      <View style={styles.productsWrapper}>
        {productsPopular.products ? (
          productsPopular.products &&
          productsPopular.products.map((product) => {
            let img = product.image.split(',');
            console.log(img[0]);
            return (
              <ProductCard
                navigation={navigation}
                key={product.id}
                imgUrl={img[0].replace('localhost', IP_DEVELOPMENT)}
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

export default Favorite;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingVertical: 35,
    marginTop: 20,
  },
  image: {
    left: 100,
    top: 100,
  },
  productsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
});
