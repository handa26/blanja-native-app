import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ScrollView, View, Text, StyleSheet, Image} from 'react-native';
import {Header, Left, Button, Body, Title, Right, Spinner} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductCard from '../components/ProductCard/ProductCard';
import bags from '../assets/icons/bags.png';

const Favorite = ({navigation}) => {
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
          <Title style={{color: 'black'}}>Wishlist</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="cart-plus" size={25} />
          </Button>
        </Right>
      </Header>
      {/* <HeadlineText condition="Wishlist" /> */}
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
});
