import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const OrderCard = () => {
  return (
    <View>
      <View style={styles.cardWrapper}>
        <View style={{padding: 10, marginTop: 15}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontWeight: 'bold'}}>Order №1947034</Text>
            <Text style={{color: 'gray'}}>05-12-2019</Text>
          </View>
          <Text style={{color: 'gray'}}>Tracking number: IW3475453455</Text>
          <Text style={{color: 'gray'}}>Quantity: 3</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'gray'}}>Total Amount: Rp. 50.000</Text>
            <Text style={{color: 'green'}}>Delivered</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderCard;
