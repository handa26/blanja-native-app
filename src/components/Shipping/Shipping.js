import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Header,
  Left,
  Button,
  Right,
  Body,
  Title,
  Item,
  Input,
} from 'native-base';

const Shipping = ({navigation}) => {
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
        <Body style={styles.title}>
          <Title style={{color: 'black'}}>Shipping Address</Title>
        </Body>
        <Right />
      </Header>
      <View>
        <Item style={styles.input}>
          <Icon name="search" size={15} style={{marginLeft: 10}} />
          <Input placeholder="Search" />
        </Item>
        <Text style={styles.headlineText}>Shipping address</Text>
        <View style={styles.cardWrapper}>
          <View style={{padding: 10, marginTop: 15}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>John Lennon</Text>
              <Text style={{color: '#DB3022'}}>Change</Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text>3 Newbridge Court</Text>
              <Text>Chino Hills, CA 91709, United States</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardSelected}>
          <View style={{padding: 10, marginTop: 15}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Ananda Muhammad Muthaqin</Text>
              <Text style={{color: '#DB3022'}}>Change</Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text>JL. Kebun Karet no. 10</Text>
              <Text>Banjarbaru, South Borneo 70712, Indonesia</Text>
            </View>
          </View>
        </View>
        <Button bordered style={styles.button}>
          <Text style={{marginLeft: 133, color: 'black'}}>ADD NEW ADDRESS</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default Shipping;

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
  cardSelected: {
    width: 385,
    height: 140,
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 15,
    marginVertical: 10,
    borderColor: '#DB3022',
    borderWidth: 1,
  },
  input: {
    backgroundColor: 'white',
    marginLeft: 15,
    marginTop: 15,
    borderRadius: 30,
    width: 395,
    height: 50,
    marginBottom: 20,
  },
  headlineText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 15,
  },
  button: {
    width: 385,
    height: 48,
    marginVertical: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    marginLeft: 20,
  },
});
