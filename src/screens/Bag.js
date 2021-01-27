import React, {useState, useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {
  removeFromCart,
  pickCart,
  plusQty,
  minQty,
  clearCart,
} from '../public/redux/action/cartAction';
import {View, StyleSheet, Image, Alert} from 'react-native';
import {Button, Text, Content, Container} from 'native-base';

import HeadlineText from '../components/HeadlineText/HeadlineText';
import ProductBag from '../components/ProductBag/ProductBag';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import Bags from '../assets/icons/bags.png';

const Bag = ({navigation, cart, removeFromCart, pickCart, plusQty, minQty}) => {
  const pick = useSelector((state) => state.cart.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  if (pick.length !== 0) {
    pick.map((item) =>
      console.log('disini cekpoint ' + pick.indexOf(item) + ' ' + item.pick),
    );
  }
  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      if (item.pick) {
        items += item.qty;
        price += item.qty * item.price;
      }
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
  console.log(cart.length);
  return (
    <Container>
      <CustomHeader
        rightIcon="search"
        rightIconRoute={() => navigation.navigate('Search')}
        leftIconRoute={() => navigation.goBack()}
        leftIcon="arrow-left"
      />
      <HeadlineText condition="My Bag" />
      <Content style={{marginBottom: 100}}>
        {cart.length === 0 ? (
          <View style={{height: 450}}>
            <Image source={Bags} style={styles.image} />
            <View style={{left: 55, top: 100}}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: '#DB3022',
                  marginLeft: 110,
                }}>
                Empty?
              </Text>
              <Button
                rounded
                onPress={() => navigation.navigate('Home')}
                style={{
                  marginLeft: 100,
                  marginTop: 10,
                  backgroundColor: '#DB3022',
                }}>
                <Text>Shopping</Text>
              </Button>
            </View>
          </View>
        ) : (
          cart.map((item) => {
            return (
              <ProductBag
                key={item.id}
                productName={item.productName}
                imgUrl={item.image}
                price={item.price}
                remove={() => removeFromCart(item.id)}
                picked={() => pickCart(item.id)}
                min={() => minQty(item.id)}
                plus={() => plusQty(item.id)}
                status={item.pick}
                qty={item.qty}
              />
            );
          })
        )}
      </Content>
      {cart.length === 0 ? null : (
        <View style={styles.footer}>
          <View style={styles.total}>
            <Text>Total amount: </Text>
            <Text>{`Rp ${totalPrice.toFixed(2)}`}</Text>
          </View>
          <Button
            style={styles.button}
            onPress={() => {
              if (totalItems == 0) {
                return Alert.alert(
                  `Bag`,
                  'Pick Your Product',
                  [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                  {cancelable: true},
                );
              }
              clearCart();
              navigation.navigate('Checkout', {totalPrice, totalItems});
            }}>
            <Text style={styles.buttonText}>Checkout</Text>
          </Button>
        </View>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    pickCart: (id) => dispatch(pickCart(id)),
    plusQty: (id) => dispatch(plusQty(id)),
    minQty: (id) => dispatch(minQty(id)),
    clearCart: () => dispatch(clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bag);

const styles = StyleSheet.create({
  button: {
    position: 'relative',
    width: 390,
    height: 48,
    marginLeft: 20,
    backgroundColor: '#DB3022',
    borderRadius: 50,
  },
  image: {
    left: 100,
    top: 70,
  },
  buttonText: {
    position: 'absolute',
    left: 135,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  checkout: {
    marginBottom: 30,
    marginTop: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    paddingVertical: 15,
    backgroundColor: 'white',
    right: 16,
    alignSelf: 'center',
  },
});
