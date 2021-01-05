import React from 'react';
import {View} from 'react-native';
import {Button, FooterTab, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Footer = ({navigation}) => {
  return (
    <View>
      <FooterTab style={styles.footer}>
        <Button vertical onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={30} color="#DADADA" />
          <Text style={styles.textIcon}>Home</Text>
        </Button>
        <Button vertical onPress={() => navigation.navigate('Shop')}>
          <Icon name="shopping-cart" size={30} color="#DADADA" />
          <Text style={styles.textIcon}>Shop</Text>
        </Button>
        <Button vertical onPress={() => navigation.navigate('Bag')}>
          <Icon name="shopping-bag" size={30} color="#DADADA" />
          <Text style={styles.textIcon}>Bag</Text>
        </Button>
        <Button vertical onPress={() => navigation.navigate('Favorite')}>
          <Icon name="heart" size={30} color="#DADADA" />
          <Text style={styles.textIcon}>Favorite</Text>
        </Button>
        <Button vertical onPress={() => navigation.navigate('Profile')}>
          <Icon name="user-circle-o" size={30} color="#DADADA" />
          <Text style={styles.textIcon}>Profile</Text>
        </Button>
      </FooterTab>
    </View>
  );
};

export default Footer;
