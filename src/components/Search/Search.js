import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, Item, Input, Button, Text, Left} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeadlineText from '../HeadlineText/HeadlineText';

const Search = ({navigation}) => {
  return (
    <View>
      <Header style={styles.header} searchBar rounded>
        <Left>
          <Button transparent>
            <Icon
              name="arrow-left"
              size={25}
              onPress={() => navigation.goBack()}
            />
          </Button>
        </Left>
        <Item style={styles.input}>
          <Icon name="search" size={15} style={{marginLeft: 10}} />
          <Input placeholder="Search" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      <HeadlineText condition="Popular search" />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingVertical: 35,
    marginTop: 20,
  },
  input: {
    backgroundColor: '#f1f1f1',
    // marginRight: -25,
    borderRadius: 20,
    right: 60,
  },
});
