import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, Button, Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeadlineText from '../components/HeadlineText/HeadlineText';
import ProductBag from '../components/ProductBag/ProductBag';

const Bag = () => {
  return (
    <View>
      <Header style={styles.header}>
        <Right>
          <Button transparent>
            <Icon name="search" size={25} />
          </Button>
        </Right>
      </Header>
      <HeadlineText condition="My Bag" />
      <ProductBag />
      <ProductBag />
    </View>
  );
};

export default Bag;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingVertical: 35,
    marginTop: 20,
  },
});
