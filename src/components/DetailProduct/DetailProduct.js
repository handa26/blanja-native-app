import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Header, Left, Button, Body, Title, Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import rating from '../../assets/icons/rating-full.png';

const DetailProduct = ({name, desc, img, brand, price, navigation}) => {
  return (
    <View>
      <Header style={styles.header}>
        <Left>
          <Button transparent>
            <Icon
              name="arrow-left"
              size={25}
              onPress={() => navigation.goBack()}
            />
          </Button>
        </Left>
        <Body>
          <Title style={{color: 'black'}}>{name}</Title>
        </Body>
        <Right>
          <Icon name="share-alt" size={25} />
        </Right>
      </Header>
      <View>
        <Image source={{uri: img}} style={styles.productImage} />
        <View style={styles.productWrapper}>
          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 5,
              }}>
              <Text style={styles.text}>{name}</Text>
              <Text style={styles.text}>Rp. {price}</Text>
            </View>
            <Text style={styles.textBrand}>{brand}</Text>
            <Image source={rating} />
          </View>
          <Text style={styles.textDesc}>{desc}</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 10,
  },
  productImage: {
    height: 413,
    width: 450,
  },
  title: {
    marginLeft: 65,
  },
  header: {
    backgroundColor: 'white',
    paddingVertical: 35,
    marginTop: 20,
  },
  productWrapper: {
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textBrand: {
    color: 'gray',
    fontSize: 11,
  },
  textDesc: {
    fontSize: 14,
    marginTop: 15,
  },
});
