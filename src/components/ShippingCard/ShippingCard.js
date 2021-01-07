import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const ShippingCard = () => {
  return (
    <View>
      <View style={styles.cardSelected}>
        <View style={{padding: 10, marginTop: 15}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>John Lennon</Text>
            <Text style={{color: '#DB3022'}}>Change</Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text>3 Newbridge Court</Text>
            <Text>Chino Hills, CA 91709, United States</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ShippingCard;
