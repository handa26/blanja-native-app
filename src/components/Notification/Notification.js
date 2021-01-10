import React from 'react';
import {View, Image} from 'react-native';

import CustomHeader from '../CustomHeader/CustomHeader';

import styles from './styles';
import warning from '../../assets/icons/no-notification.png';

const Notification = ({navigation}) => {
  return (
    <View>
      <CustomHeader
        leftIcon="arrow-left"
        name="Notification"
        leftIconRoute={() => navigation.goBack()}
      />
      <View style={styles.wrapper}>
        <Image source={warning} style={styles.image} />
      </View>
    </View>
  );
};

export default Notification;
