import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Footer, Button, FooterTab, Text, Header, Container} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = ({navigation}) => {
  return (
    <Container>
      <Header />
      <Footer>
        <FooterTab style={{backgroundColor: '#DB3022'}}>
          <Button vertical>
            <Icon name="home" size={30} color="#DADADA" />
            <Text style={styles.textIcon}>Home</Text>
          </Button>
          <Button vertical>
            <Icon name="shopping-cart" size={30} color="#DADADA" />
            <Text style={styles.textIcon}>Shop</Text>
          </Button>
          <Button vertical>
            <Icon name="shopping-bag" size={30} color="#DADADA" />
            <Text style={styles.textIcon}>Bag</Text>
          </Button>
          <Button vertical>
            <Icon name="heart" size={30} color="#DADADA" />
            <Text style={styles.textIcon}>Favorite</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate('Profile')}>
            <Icon name="user-circle-o" size={30} color="#DADADA" />
            <Text style={styles.textIcon}>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({
  wrapper: {
    height: 1000,
  },
  textIcon: {
    color: '#DADADA',
  },
});
