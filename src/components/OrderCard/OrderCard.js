import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const OrderCard = ({order, trackNum, qty, total, payment}) => {
  return (
    <View>
      <View style={styles.cardWrapper}>
        <View style={{padding: 10, marginTop: 15}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: 'bold'}}>Order {order}</Text>
            <Text style={{color: 'gray'}}>05-12-2019</Text>
          </View>
          <Text style={{color: 'gray'}}>Tracking number: {trackNum}</Text>
          <Text style={{color: 'gray'}}>Quantity: {qty}</Text>
          <Text style={{color: 'gray'}}>Payment methods: {payment}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'gray'}}>Total Amount: Rp. {total}</Text>
            <Text style={{color: 'green'}}>Delivered</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderCard;
