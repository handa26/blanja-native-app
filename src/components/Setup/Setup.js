import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Header,
  Left,
  Button,
  Body,
  Title,
  Right,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeadlineText from '../HeadlineText/HeadlineText';

const Setup = ({navigation}) => {
  const [value, setValue] = React.useState('John Lennon');
  const [date, setDate] = React.useState('12/12/1989');
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
        <Right>
          <Icon
            name="search"
            size={25}
            onPress={() => navigation.navigate('Search')}
          />
        </Right>
      </Header>
      <HeadlineText condition="Settings" />
      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
          Personal Information
        </Text>
        <View>
          <Form>
            <Item style={styles.input} stackedLabel>
              <Label style={styles.label}>Full name</Label>
              <Input value={value} onChangeText={(val) => setValue(val)} />
            </Item>
            <Item style={styles.input} stackedLabel>
              <Label style={styles.label}>Date of Birth</Label>
              <Input value={date} onChangeText={(val) => setDate(val)} />
            </Item>
          </Form>
        </View>
      </View>
      <View style={{marginTop: 60}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
            Password
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'gray',
              marginLeft: 20,
              marginRight: 20,
            }}>
            Change
          </Text>
        </View>
        <View>
          <Form>
            <Item style={styles.input} stackedLabel>
              <Label style={styles.label}>Password</Label>
              <Input
                secureTextEntry
                value={value}
                onChangeText={(val) => setValue(val)}
              />
            </Item>
          </Form>
        </View>
      </View>
    </View>
  );
};

export default Setup;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingVertical: 35,
    marginTop: 20,
  },
  label: {
    marginLeft: 5,
  },
  input: {
    marginVertical: 10,
    width: 395,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
