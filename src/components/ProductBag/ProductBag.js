import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import imageSample from '../../assets/blouse.jpg';

const ProductBag = () => {
  return (
    <View style={styles.cardWrapper}>
      <Image style={styles.image} source={imageSample} />
      <View>
        <View style={styles.headerProduct}>
          <Text style={styles.productName}>T-Shirt</Text>
          <Icon name="ellipsis-v" size={20} />
        </View>
        <View style={styles.midProduct}>
          <Text>Color: Gray</Text>
          <Text>Size: L</Text>
        </View>
        <View style={styles.counterWrapper}>
          <View style={{flexDirection: 'row'}}>
            <Button style={styles.button} rounded>
              <Icon name="minus" />
            </Button>
            <Text style={styles.counterNum}>1</Text>
            <Button style={styles.button} rounded>
              <Icon name="plus" />
            </Button>
          </View>
          <View>
            <Text style={styles.price}>Rp. 20.000</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductBag;
