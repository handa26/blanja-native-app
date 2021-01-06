import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Left, Button, Body, Title, Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListCategory from '../components/ListCategory/ListCategory';

const Shop = ({navigation}) => {
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
          <Title style={{color: 'black'}}>Categories</Title>
        </Body>
        <Right>
          <Icon name="search" size={25} />
        </Right>
      </Header>
      <ListCategory />
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingVertical: 35,
    marginTop: 20,
  },
});
