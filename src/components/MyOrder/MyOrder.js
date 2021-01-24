import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {ScrollView, View} from 'react-native';
import {Spinner} from 'native-base';

import {API_URL_DEVELOPMENT} from '@env';
import HeadlineText from '../HeadlineText/HeadlineText';
import CustomHeader from '../CustomHeader/CustomHeader';
import OrderCard from '../OrderCard/OrderCard';

const MyOrder = ({navigation}) => {
  const [orders, setOrders] = useState([]);
  const userId = useSelector((state) => state.auth.id);

  useEffect(() => {
    axios
      .get(`${API_URL_DEVELOPMENT}history/${userId}`)
      .then(({data}) => {
        setOrders(data.data);
        // console.log(data);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  // console.log(orders);
  return (
    <ScrollView>
      <CustomHeader
        leftIcon="arrow-left"
        leftIconRoute={() => navigation.goBack()}
        rightIcon="search"
        rightIconRoute={() => navigation.navigate('Search')}
      />
      <HeadlineText condition="My orders" />
      <View>
        {orders &&
          orders.map((order) => {
            return (
              <OrderCard
                key={order.id}
                order={order.invoice_id.slice(12)}
                trackNum={order.invoice_id}
                qty={order.qty}
                total={order.price}
              />
            );
          })}
        {/* <OrderCard /> */}
      </View>
    </ScrollView>
  );
};

export default MyOrder;
