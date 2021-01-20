import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import {Left, Button, Right, List, ListItem, H2} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import rating from '../../assets/icons/rating-full.png';
import ProductCard from '../ProductCard/ProductCard';
import CustomHeader from '../CustomHeader/CustomHeader';

const DetailProduct = ({
  name,
  desc,
  img,
  brand,
  price,
  navigation,
  addToCart,
}) => {
  const [products, setProducts] = useState({});
  const url = 'http://192.168.8.101:3000/products';

  useEffect(() => {
    axios
      .get(url + '?page=1&limit=8')
      .then(({data}) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView>
      <CustomHeader
        leftIconRoute={() => navigation.goBack()}
        name={name}
        leftIcon="arrow-left"
        rightIcon="share-alt"
      />
      <View>
        <Image source={{uri: img}} style={styles.productImage} />
        <View style={styles.productWrapper}>
          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 5,
              }}>
              <Text style={styles.text}>{name}</Text>
              <Text style={styles.textPrice}>Rp. {price}</Text>
            </View>
            <Text style={styles.textBrand}>{brand}</Text>
            <Image source={rating} />
          </View>
          <Text style={styles.textDesc}>{desc}</Text>
          <Button style={styles.button} onPress={addToCart}>
            <Text style={{marginLeft: 150, color: 'white'}}>ADD TO CART</Text>
          </Button>
        </View>
        <List style={{marginRight: 15, marginTop: 20}}>
          <ListItem>
            <Left>
              <View>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  Shipping info
                </Text>
              </View>
            </Left>
            <Right>
              <Icon name="chevron-right" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <View>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Support</Text>
              </View>
            </Left>
            <Right>
              <Icon name="chevron-right" />
            </Right>
          </ListItem>
        </List>
        <H2 style={styles.headlineText}>You may also like this</H2>
        <ScrollView
          horizontal
          style={{flexDirection: 'row', marginVertical: 15}}>
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
      </View>
    </ScrollView>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 10,
  },
  productImage: {
    height: 413,
    width: 450,
  },
  title: {
    marginLeft: 65,
  },
  productWrapper: {
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    width: 250,
  },
  textPrice: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textBrand: {
    color: 'gray',
    fontSize: 11,
  },
  textDesc: {
    fontSize: 14,
    marginTop: 15,
  },
  headlineText: {
    marginLeft: 15,
    marginTop: 15,
  },
  button: {
    width: 400,
    height: 48,
    marginVertical: 15,
    backgroundColor: '#DB3022',
    borderRadius: 50,
  },
});
