import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Form, Item, Input, Label} from 'native-base';
import HeadlineText from '../HeadlineText/HeadlineText';
import CustomHeader from '../CustomHeader/CustomHeader';

const Setup = ({navigation}) => {
  const [value, setValue] = React.useState('John Lennon');
  const [date, setDate] = React.useState('12/12/1989');
  return (
    <View>
      <CustomHeader
        leftIcon="arrow-left"
        leftIconRoute={() => navigation.goBack()}
        rightIcon="search"
        rightIconRoute={() => navigation.navigate('Search')}
      />
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
