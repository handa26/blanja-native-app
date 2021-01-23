import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {View, StyleSheet, Alert} from 'react-native';
import {
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Container,
  Content,
  Spinner,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomHeader from '../components/CustomHeader/CustomHeader';
import HeadlineText from '../components/HeadlineText/HeadlineText';
import {API_URL_DEVELOPMENT} from '@env';

const MyProducts = ({navigation}) => {
  const [products, setProducts] = useState({});
  const url = `${API_URL_DEVELOPMENT}products`;
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    axios
      .get(url + '?page=1&limit=8')
      .then(({data}) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, [url]);

  const deleteProduct = (id, name) => {
    Alert.alert(
      'Delete Product',
      `Are you sure want to delete ${name} ?`,
      [
        {
          text: 'Cancel',
          onPress: () => {
            return console.log('Cancel Pressed');
          },
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            const config = {
              headers: {
                'x-access-token': 'Bearer ' + token,
              },
            };
            await axios
              .delete(`${API_URL_DEVELOPMENT}product/${id}`, config)
              .then((res) => console.log(res))
              .catch((err) => {
                console.log(err);
              });
            console.log('Click delete' + id);
          },
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <Container>
      <CustomHeader
        leftIcon="arrow-left"
        leftIconRoute={() => navigation.goBack()}
      />
      <HeadlineText condition="List Products" />
      <Content>
        <List style={{marginBottom: 100}}>
          {products.products ? (
            products.products &&
            products.products.map((product) => {
              let img = product.image.split(',');
              return (
                <ListItem thumbnail key={product.id}>
                  <Left>
                    <Thumbnail
                      square
                      source={{
                        uri: img[0].replace('localhost', '192.168.8.101'),
                      }}
                    />
                  </Left>
                  <Body>
                    <Text>{product.product_name}</Text>
                    <Text note numberOfLines={1}>
                      {product.product_description}
                    </Text>
                  </Body>
                  <Right>
                    <Button transparent>
                      <Icon
                        name="edit"
                        size={25}
                        color="black"
                        onPress={() =>
                          navigation.navigate('EditProduct', {
                            Itemid: product.id,
                            otherParams: 'hello',
                          })
                        }
                      />
                      <Icon
                        name="trash-o"
                        size={25}
                        color="red"
                        style={{marginLeft: 10}}
                        onPress={() =>
                          deleteProduct(product.id, product.product_name)
                        }
                      />
                    </Button>
                  </Right>
                </ListItem>
              );
            })
          ) : (
            <Spinner />
          )}
          {/* {products.products &&
            products.products.map((product) => {
              let img = product.image.split(',');
              return (
                <ListItem thumbnail key={product.id}>
                  <Left>
                    <Thumbnail
                      square
                      source={{
                        uri: img[0].replace('localhost', '192.168.8.101'),
                      }}
                    />
                  </Left>
                  <Body>
                    <Text>{product.product_name}</Text>
                    <Text note numberOfLines={1}>
                      {product.product_description}
                    </Text>
                  </Body>
                  <Right>
                    <Button transparent>
                      <Icon
                        name="edit"
                        size={25}
                        color="black"
                        onPress={() =>
                          navigation.navigate('EditProduct', {
                            Itemid: product.id,
                            otherParams: 'hello',
                          })
                        }
                      />
                      <Icon
                        name="trash-o"
                        size={25}
                        color="red"
                        style={{marginLeft: 10}}
                      />
                    </Button>
                  </Right>
                </ListItem>
              );
            })} */}
        </List>
      </Content>
      <View style={styles.footer}>
        <Button
          iconLeft
          block
          style={styles.btn}
          rounded
          onPress={() => navigation.navigate('AddProduct')}>
          <Icon name="plus" size={20} color="white" />
          <Text>Add product</Text>
        </Button>
      </View>
    </Container>
  );
};

export default MyProducts;

const styles = StyleSheet.create({
  footerWrapper: {
    backgroundColor: 'white',
    borderWidth: 0,
    height: 60,
  },
  formBox: {
    position: 'relative',
    marginVertical: 20,
    marginHorizontal: 20,
    // marginLeft: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: 390,
  },
  btn: {
    backgroundColor: '#DB3022',
  },
});
