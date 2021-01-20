import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const ProductBag = ({imgUrl, productName, price, remove}) => {
  const [counter, setCounter] = React.useState(2);
  return (
    <View style={styles.cardWrapper}>
      <Image style={styles.image} source={{uri: imgUrl}} />
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
            <Button
              style={styles.button}
              rounded
              onPress={() => setCounter(counter - 1)}>
              <Icon name="minus" />
            </Button>
            <Text style={styles.counterNum}>{counter}</Text>
            <Button
              style={styles.button}
              rounded
              onPress={() => setCounter(counter + 1)}>
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
