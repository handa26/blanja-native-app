import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header, Left, Button, Right} from 'native-base';
import HeadlineText from '../HeadlineText/HeadlineText';

const MyOrder = ({navigation}) => {
  return (
    <ScrollView>
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
        <Right>
          <Icon
            name="search"
            size={25}
            onPress={() => navigation.navigate('Search')}
          />
        </Right>
      </Header>
      <HeadlineText condition="My orders" />
      <View>
        <View style={styles.cardWrapper}>
          <View style={{padding: 10, marginTop: 15}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: 'bold'}}>Order №1947034</Text>
              <Text style={{color: 'gray'}}>05-12-2019</Text>
            </View>
            <Text style={{color: 'gray'}}>Tracking number: IW3475453455</Text>
            <Text style={{color: 'gray'}}>Quantity: 3</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: 'gray'}}>Total Amount: Rp. 50.000</Text>
              <Text style={{color: 'green'}}>Delivered</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardWrapper}>
          <View style={{padding: 10, marginTop: 15}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: 'bold'}}>Order №1947034</Text>
              <Text style={{color: 'gray'}}>05-12-2019</Text>
            </View>
            <Text style={{color: 'gray'}}>Tracking number: IW3475453455</Text>
            <Text style={{color: 'gray'}}>Quantity: 3</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: 'gray'}}>Total Amount: Rp. 50.000</Text>
              <Text style={{color: 'green'}}>Delivered</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardWrapper}>
          <View style={{padding: 10, marginTop: 15}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: 'bold'}}>Order №1947034</Text>
              <Text style={{color: 'gray'}}>05-12-2019</Text>
            </View>
            <Text style={{color: 'gray'}}>Tracking number: IW3475453455</Text>
            <Text style={{color: 'gray'}}>Quantity: 3</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: 'gray'}}>Total Amount: Rp. 50.000</Text>
              <Text style={{color: 'green'}}>Delivered</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardWrapper}>
          <View style={{padding: 10, marginTop: 15}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: 'bold'}}>Order №1947034</Text>
              <Text style={{color: 'gray'}}>05-12-2019</Text>
            </View>
            <Text style={{color: 'gray'}}>Tracking number: IW3475453455</Text>
            <Text style={{color: 'gray'}}>Quantity: 3</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: 'gray'}}>Total Amount: Rp. 50.000</Text>
              <Text style={{color: 'green'}}>Delivered</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardWrapper}>
          <View style={{padding: 10, marginTop: 15}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontWeight: 'bold'}}>Order №1947034</Text>
              <Text style={{color: 'gray'}}>05-12-2019</Text>
            </View>
            <Text style={{color: 'gray'}}>Tracking number: IW3475453455</Text>
            <Text style={{color: 'gray'}}>Quantity: 3</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: 'gray'}}>Total Amount: Rp. 50.000</Text>
              <Text style={{color: 'green'}}>Delivered</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyOrder;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingVertical: 35,
    marginTop: 20,
  },
  cardWrapper: {
    width: 385,
    height: 140,
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 15,
    marginVertical: 10,
  },
});
