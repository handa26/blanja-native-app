import React from 'react';
import {View} from 'react-native';
import HeadlineText from '../components/HeadlineText/HeadlineText';
import ProductBag from '../components/ProductBag/ProductBag';
import CustomHeader from '../components/CustomHeader/CustomHeader';

const Bag = ({navigation}) => {
  return (
    <View>
      <CustomHeader
        rightIcon="search"
        rightIconRoute={() => navigation.navigate('Search')}
        leftIconRoute={() => navigation.goBack()}
        leftIcon="arrow-left"
      />
      <HeadlineText condition="My Bag" />
      <ProductBag />
      <ProductBag />
    </View>
  );
};

export default Bag;
