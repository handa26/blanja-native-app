import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
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
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import HeadlineText from '../../components/HeadlineText/HeadlineText';
import {API_URL_DEVELOPMENT} from '@env';

const MyProducts = ({navigation, id}) => {
  const [products, setProducts] = useState();
  const url = `${API_URL_DEVELOPMENT}`;
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    axios
      .get(`${url}/products/user/${id}`)
      .then(({data}) => {
        setProducts(data.data);
      })
      .catch((err) => console.log(err));
  }, [id, url]);

  const deleteProduct = (idProduct, name) => {
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
              .delete(`${API_URL_DEVELOPMENT}product/${idProduct}`, config)
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
          {products ? (
            products &&
            products.map((product) => {
              let img = product.image.split(',');
              return (
                <ListItem thumbnail key={product.id}>
                  <Left>
                    <Thumbnail
                      square
                      source={{
                        uri: API_URL_DEVELOPMENT + img[0],
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
        <Button
          iconLeft
          block
          style={styles.btnChat}
          rounded
          onPress={() => navigation.navigate('ChatList')}>
          <Icon name="envelope-o" size={20} color="white" />
        </Button>
      </View>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.auth.id,
  };
};

export default connect(mapStateToProps)(MyProducts);

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
    width: wp('100%'),
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: '#DB3022',
    marginHorizontal: 10,
    width: wp('70%'),
  },
  btnChat: {
    backgroundColor: '#DB3022',
    marginHorizontal: 10,
    width: wp('20%'),
  },
});
