import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import streetClothes from '../../assets/street-clothes.png';

const ImageHeader = () => {
  return (
    <View style={styles.imageWrapper}>
      <Image source={streetClothes} style={styles.imageHeader} />
      <Text style={styles.text}>Street Clothes</Text>
      <Icon style={styles.notif} name="bell-o" size={25} color="white" />
    </View>
  );
};

export default ImageHeader;
