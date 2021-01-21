import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {connect} from 'react-redux';
import {View, ScrollView, StyleSheet, Alert} from 'react-native';
import {Button, Text} from 'native-base';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import ShippingCard from '../components/ShippingCard/ShippingCard';
import CheckboxPayments from '../components/CheckboxPayments/CheckboxPayments';

const Checkout = ({navigation, id}) => {
  const postTransaction = async () => {
    // const user_id = await AsyncStorage.getItem('userid');
    const user_id = id;
    const data = {
      user_id: user_id,
      qty: 2,
      price: 50000,
    };

    axios
      .post('http://54.237.63.225:3000/history', data)
      .then((res) => {
        console.log('Inside history endpoint', res);
        Alert.alert(
          `Checkout Berhasil !!!`,
          'Ayo Belanja Lagi :)',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      })
      .catch((err) => console.log(err));
  };
  return (
    <ScrollView>
      <CustomHeader
        leftIconRoute={() => navigation.goBack()}
        leftIcon="arrow-left"
        name="Checkout"
      />
      <View>
        <View>
          <Text style={styles.headlineText}>Shipping address</Text>
          <ShippingCard />
        </View>
        <View>
          <Text style={styles.headlineText}>Payment</Text>
          <CheckboxPayments image="Mastercard" />
          <CheckboxPayments image="Paypal" />
          <CheckboxPayments image="Stripe" />
          <CheckboxPayments image="GoogleWallet" />
        </View>
      </View>
      <View style={styles.bottomNav}>
        <View style={styles.total}>
          <Text>Total amount:</Text>
          <Text>Rp. 10.000.00</Text>
        </View>
        <Button
          style={styles.button}
          onPress={() => {
            postTransaction();
            navigation.navigate('Success');
          }}>
          <Text style={styles.buttonText}>Submit Order</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.auth.id,
  };
};

export default connect(mapStateToProps)(Checkout);

const styles = StyleSheet.create({
  bottomNav: {
    marginTop: 20,
  },
  total: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  headlineText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 5,
    marginTop: 20,
  },
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
