import React from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from '../public/redux/action/cartAction';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Button, Text} from 'native-base';
import HeadlineText from '../components/HeadlineText/HeadlineText';
import ProductBag from '../components/ProductBag/ProductBag';
import CustomHeader from '../components/CustomHeader/CustomHeader';

const Bag = ({navigation, cart, removeFromCart}) => {
  return (
    <ScrollView>
      <CustomHeader
        rightIcon="search"
        rightIconRoute={() => navigation.navigate('Search')}
        leftIconRoute={() => navigation.goBack()}
        leftIcon="arrow-left"
      />
      <HeadlineText condition="My Bag" />
      {cart.map((item) => {
        return (
          <ProductBag
            key={item.id}
            productName={item.productName}
            imgUrl={item.image}
            price={item.price}
            remove={() => removeFromCart(item.id)}
          />
        );
      })}
      {/* <ProductBag />
      <ProductBag /> */}
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('Checkout')}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Button>
    </ScrollView>
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
  buttonText: {
    position: 'absolute',
    left: 135,
  },
});
