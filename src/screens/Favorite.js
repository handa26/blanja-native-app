import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Left, Button, Body, Title, Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

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
          <Title style={{color: 'black'}}>Favorites</Title>
        </Body>
        <Right />
      </Header>
      <Text>Ini screen favorite</Text>
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
