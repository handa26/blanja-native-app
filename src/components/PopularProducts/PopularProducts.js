import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Header, Left, Button, Body, Title, Right, Spinner} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductCard from '../ProductCard/ProductCard';

const PopularProducts = ({navigation}) => {
  const [productsPopular, setProductsPopular] = useState({});
  const url = 'http://192.168.8.100:3000/products';

  useEffect(() => {
    axios
      .get(url + '/popular?page=1&limit=15')
      .then(({data}) => setProductsPopular(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView>
      <Header style={styles.header}>
        <Left>
          <Button transparent>
            <Icon
              name="arrow-left"
              size={25}
              onPress={() => navigation.goBack()}
            />
          </Button>
        </Left>
        <Body style={styles.title}>
          <Title style={{color: 'black'}}>Most popular</Title>
        </Body>
        <Right>
          <Icon
            name="search"
            size={25}
            onPress={() => navigation.navigate('Search')}
          />
        </Right>
      </Header>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          marginVertical: 15,
        }}>
        {productsPopular.products ? (
          productsPopular.products &&
          productsPopular.products.map((product) => {
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
          })
        ) : (
          <Spinner />
        )}
      </View>
    </ScrollView>
  );
};

export default PopularProducts;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingVertical: 35,
    marginTop: 20,
  },
});
