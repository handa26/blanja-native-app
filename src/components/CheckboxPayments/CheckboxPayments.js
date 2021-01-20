import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';
import {COLOR_DISABLE, COLOR_MAIN} from '../../utils/constants';

import styles from './styles';

const CheckboxPayments = ({image}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.wrapIcon}>
          {image == 'Mastercard' && (
            <Icon name="cc-mastercard" size={25} color="red" />
          )}
          {image == 'Paypal' && (
            <Icon name="paypal" size={25} color="#0a7dc9" />
          )}
          {image == 'Stripe' && (
            <Icon name="cc-stripe" size={25} color="#004470" />
          )}
          {image == 'GoogleWallet' && (
            <Icon name="google-wallet" size={25} color="#1fcf51" />
          )}
        </View>
        <Text style={{position: 'absolute', left: 75, bottom: 12}}>
          {image}
        </Text>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(val) => setToggleCheckBox(val)}
          tintColors={{true: COLOR_MAIN, false: COLOR_DISABLE}}
        />
      </View>
    </ScrollView>
  );
};

export default CheckboxPayments;
