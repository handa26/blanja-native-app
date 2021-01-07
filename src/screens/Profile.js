import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Header, Button, Right, List, ListItem, Text, Left} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeadlineText from '../components/HeadlineText/HeadlineText';
import CustomHeader from '../components/CustomHeader/CustomHeader';

import john from '../assets/john-lennon.jpg';

const Profile = ({navigation}) => {
  return (
    <View>
      <CustomHeader
        rightIcon="search"
        rightIconRoute={() => navigation.navigate('Search')}
      />
      <HeadlineText condition="My profile" />
      <View
        style={{marginLeft: 15, flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Image
            source={john}
            style={{width: 100, height: 100, borderRadius: 50}}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'column', marginLeft: 10}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>John Lennon</Text>
          <Text style={{fontSize: 14, color: 'gray'}}>
            notacutuallylennon@fake.com
          </Text>
        </View>
      </View>
      <View>
        <List style={{marginRight: 15, marginTop: 20}}>
          <ListItem onPress={() => navigation.navigate('Order')}>
            <Left>
              <View>
                <Text style={styles.headline}>My orders</Text>
                <Text style={styles.textDetail}>Already have 5 orders</Text>
              </View>
            </Left>
            <Right>
              <Icon name="chevron-right" />
            </Right>
          </ListItem>
          <ListItem onPress={() => navigation.navigate('Shipping')}>
            <Left>
              <View>
                <Text style={styles.headline}>Shipping addresses</Text>
                <Text style={{fontSize: 16, color: 'gray', marginRight: 155}}>
                  2 addresses
                </Text>
              </View>
            </Left>
            <Right>
              <Icon name="chevron-right" />
            </Right>
          </ListItem>
          <ListItem onPress={() => navigation.navigate('Setup')}>
            <Left>
              <View>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', marginRight: 115}}>
                  Settings
                </Text>
                <Text style={{fontSize: 16, color: 'gray', marginRight: 20}}>
                  Notifications, password
                </Text>
              </View>
            </Left>
            <Right>
              <Icon name="chevron-right" />
            </Right>
          </ListItem>
        </List>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingVertical: 35,
    marginTop: 20,
  },
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 70,
  },
  textDetail: {
    fontSize: 16,
    color: 'gray',
  },
});
