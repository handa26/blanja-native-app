import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const ShippingCard = ({name, city, province, postalCodes, street}) => {
  return (
    <View>
      <View style={styles.cardSelected}>
        <View style={{padding: 10, marginTop: 15}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>{name}</Text>
            <Text style={{color: '#DB3022'}}>Change</Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text>{street}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginRight: 7}}>{city}</Text>
              <Text style={{marginRight: 7}}>{postalCodes}</Text>
              <Text>{province}</Text>
            </View>
            {/* <Text>Chino Hills, CA 91709, United States</Text> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ShippingCard;
