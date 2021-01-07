import React from 'react';
import {View, Image} from 'react-native';

import CustomHeader from '../CustomHeader/CustomHeader';

import styles from './styles';
import warning from '../../assets/icons/no-notification.png';

const WarnMessage = ({navigation}) => {
  return (
    <View>
      <CustomHeader
        leftIcon="arrow-left"
        name="Notification"
        navigation={navigation}
      />
      <View style={styles.wrapper}>
        <Image source={warning} style={styles.image} />
      </View>
    </View>
  );
};

export default WarnMessage;
