import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Header, Button, Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeadlineText from '../components/HeadlineText/HeadlineText';

import john from '../assets/john-lennon.jpg';

const Profile = ({navigation}) => {
  return (
    <View>
      <Header style={styles.header}>
        <Right>
          <Button transparent>
            <Icon name="search" size={25} />
          </Button>
        </Right>
      </Header>
      <HeadlineText condition="My profile" />
      <View
        style={{marginLeft: 15, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={john}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <View style={{flexDirection: 'column', marginLeft: 10}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>John Lennon</Text>
          <Text style={{fontSize: 14, color: 'gray'}}>
            notacutuallylennon@fake.com
          </Text>
        </View>
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
});
