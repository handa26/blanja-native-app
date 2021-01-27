import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {
  View,
  ScrollView,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {Button, Text} from 'native-base';
import PushNotification from 'react-native-push-notification';
import {showNotification} from '../notif';

import CustomHeader from '../components/CustomHeader/CustomHeader';
import ShippingCard from '../components/ShippingCard/ShippingCard';
import CheckboxPayments from '../components/CheckboxPayments/CheckboxPayments';
import {API_URL_DEVELOPMENT} from '@env';

const channel = 'notif';

const Checkout = ({navigation, id, route}) => {
  const {totalPrice, totalItems} = route.params;
  const [payment, setPayment] = useState('');
  const [error, setError] = useState('');

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Checkout success!',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  //pushnotif
  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: 'notif',
        channelName: 'My Notification channel',
        channelDescription: 'A channel to categories your notification',
        soundName: 'default',
        importance: 4,
        vibrate: true,
      },
      (created) => console.log(`createchannel returned '${created}'`),
    );
    // code to run on component mount
  }, []);

  useEffect(() => {
    PushNotification.getChannels((channel_ids) => {
      console.log(channel_ids);
    });
  }, []);

  const postTransaction = async () => {
    if (payment === '') {
      setError('Please select your payments method.');
    } else {
      const user_id = id;
      const data = {
        user_id: user_id,
        qty: totalItems,
        price: totalPrice,
        payment: payment,
      };

      axios
        .post(`${API_URL_DEVELOPMENT}history`, data)
        .then((res) => {
          console.log('Inside history endpoint', res);
          console.log('checkout');
        })
        .catch((err) => console.log(err));
    }
  };
  console.log(payment);
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
          <Text>{error}</Text>
          <TouchableOpacity
            onPress={() => {
              setPayment('mastercard');
            }}>
            <CheckboxPayments image="Mastercard" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPayment('paypal');
            }}>
            <CheckboxPayments image="Paypal" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPayment('stripe');
            }}>
            <CheckboxPayments image="Stripe" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setPayment('google');
            }}>
            <CheckboxPayments image="GoogleWallet" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <View style={styles.total}>
          <Text>Total amount:</Text>
          <Text>Rp. {totalPrice.toFixed(2)}</Text>
        </View>
        <Button
          style={styles.button}
          onPress={() => {
            postTransaction();
            showToastWithGravityAndOffset();
            showNotification('Notification', 'Checkout success', channel);
            setPayment('');
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
