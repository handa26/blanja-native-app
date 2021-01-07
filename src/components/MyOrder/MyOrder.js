import React from 'react';
import {ScrollView, View} from 'react-native';
import HeadlineText from '../HeadlineText/HeadlineText';
import CustomHeader from '../CustomHeader/CustomHeader';
import OrderCard from '../OrderCard/OrderCard';

const MyOrder = ({navigation}) => {
  return (
    <ScrollView>
      <CustomHeader
        leftIcon="arrow-left"
        leftIconRoute={() => navigation.goBack()}
        rightIcon="search"
        rightIconRoute={() => navigation.navigate('Search')}
      />
      <HeadlineText condition="My orders" />
      <View>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </View>
    </ScrollView>
  );
};

export default MyOrder;
