import React from 'react';
import {View} from 'react-native';
import ListCategory from '../components/ListCategory/ListCategory';
import CustomHeader from '../components/CustomHeader/CustomHeader';

const Shop = ({navigation}) => {
  return (
    <View>
      <CustomHeader
        leftIcon="arrow-left"
        leftIconRoute={() => navigation.goBack()}
        rightIcon="search"
        rightIconRoute={() => navigation.navigate('Search')}
        name="Categories"
      />
      <ListCategory navigation={navigation} />
    </View>
  );
};

export default Shop;
