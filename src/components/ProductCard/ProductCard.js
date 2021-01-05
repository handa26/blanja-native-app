import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Badge, Text} from 'native-base';

import styles from './styles';
import rating from '../../assets/icons/rating.png';

const ProductCard = ({imgUrl, brand, name, price, navigation, id}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Detail', {
              Itemid: id,
              otherParams: 'hello',
            })
          }>
          <Image source={{uri: imgUrl}} style={styles.cardImage} />
        </TouchableOpacity>
        <Badge style={styles.badge}>
          <Text style={{color: 'white'}}>New</Text>
        </Badge>
        <Image source={rating} />
        <Text style={styles.textBrand}>{brand}</Text>
        <Text style={styles.textProduct}>{name}</Text>
        <Text style={styles.textPrice}>Rp. {price.toLocaleString()}</Text>
      </View>
    </View>
  );
};

export default ProductCard;
