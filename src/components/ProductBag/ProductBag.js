import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';

import styles from './styles';
import {COLOR_DISABLE, COLOR_MAIN} from '../../utils/constants';

const ProductBag = ({
  imgUrl,
  productName,
  price,
  remove,
  picked,
  status,
  min,
  plus,
  qty,
}) => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{uri: imgUrl}} />
        <CheckBox
          disabled={false}
          style={styles.checkBox}
          value={status}
          onChange={picked}
          tintColors={{
            true: COLOR_MAIN,
            false: COLOR_DISABLE,
          }}
        />
      </View>
      <View>
        <View style={styles.headerProduct}>
          <Text style={styles.productName}>{productName}</Text>
          <Icon onPress={remove} name="trash" size={20} color="red" />
        </View>
        <View style={styles.midProduct}>
          <Text>Color: Gray</Text>
          <Text>Size: L</Text>
        </View>
        <View style={styles.counterWrapper}>
          <View style={{flexDirection: 'row'}}>
            <Button style={styles.button} rounded onPress={min}>
              <Icon name="minus" />
            </Button>
            <Text style={styles.counterNum}>{qty}</Text>
            <Button style={styles.button} rounded onPress={plus}>
              <Icon name="plus" />
            </Button>
          </View>
          <View>
            <Text style={styles.price}>Rp. {price}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductBag;
