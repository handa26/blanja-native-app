import React, {useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {logout} from '../public/redux/action/authAction';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Right, List, ListItem, Text, Left} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeadlineText from '../components/HeadlineText/HeadlineText';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import {API_URL_DEVELOPMENT} from '@env';

import john from '../assets/john-lennon.jpg';

const Profile = ({
  navigation,
  isLogin,
  token,
  logoutRedux,
  level,
  id,
  name,
  email,
}) => {
  console.log('Is login?', isLogin);
  console.log('Here token', token);
  console.log('your level', level);
  console.log('your user id', id);
  console.log('Your name', name);
  console.log('Your email', email);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (!isLogin) {
        navigation.navigate('Login');
      }
    });

    return unsubscribe;
    // if (!isLogin) {
    //   navigation.navigate('Login');
    // }
  }, [isLogin, navigation]);

  const logOut = async () => {
    try {
      console.log('Token acquired', token);
      const data = '';
      await axios.post(`${API_URL_DEVELOPMENT}auth/logout`, data, {
        headers: {
          'x-access-token': 'Bearer ' + token,
        },
      });
      logoutRedux();
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };

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
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{name}</Text>
          <Text style={{fontSize: 14, color: 'gray'}}>{email}</Text>
        </View>
      </View>
      <View>
        <List style={{marginRight: 15, marginTop: 20}}>
          {level === 'seller' ? (
            <ListItem onPress={() => navigation.navigate('MyProducts')}>
              <Left>
                <View>
                  <Text style={styles.headline}>My Products</Text>
                </View>
              </Left>
              <Right>
                <Icon name="chevron-right" />
              </Right>
            </ListItem>
          ) : (
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
          )}
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
          <ListItem onPress={logOut}>
            <Left>
              <View>
                <Text style={styles.headline}>Logout</Text>
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

const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin,
    token: state.auth.token,
    id: state.auth.id,
    level: state.auth.level,
    name: state.auth.name,
    email: state.auth.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutRedux: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
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
