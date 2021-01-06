import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Left, Button, Body, Title, Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeadlineText from '../components/HeadlineText/HeadlineText';

const Favorite = ({navigation}) => {
  return (
    <View>
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
        <Body style={styles.title}>
          <Title style={{color: 'black'}}>Wishlist</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="cart-plus" size={25} />
          </Button>
        </Right>
      </Header>
      <HeadlineText condition="Wishlist" />
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingVertical: 35,
    marginTop: 20,
  },
});
