import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

import HeadlineText from '../HeadlineText/HeadlineText';
import CustomHeader from '../CustomHeader/CustomHeader';
import {API_URL_DEVELOPMENT} from '@env';

const Setup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const userId = useSelector((state) => state.auth.id);
  const url = API_URL_DEVELOPMENT;

  useEffect(() => {
    axios
      .get(url + `/user/${userId}`)
      .then(({data}) => {
        setName(data);
        setEmail(data);
      })
      .catch((err) => console.log(err.response));
  }, [url, userId]);

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
        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>
          Personal Information
        </Text>
        <View>
          <Input
            inputContainerStyle={styles.input}
            label="Name"
            defaultValue={name.name}
            onChangeText={(val) => setName(val)}
          />
          <Input
            inputContainerStyle={styles.input}
            defaultValue={email.email}
            label="Email"
            onChangeText={(val) => setEmail(val)}
          />
        </View>
      </View>
      <View style={{marginTop: 40}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>
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
          <Input
            inputContainerStyle={styles.input}
            secureTextEntry={true}
            onChangeText={(val) => setPass(val)}
          />
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
    borderWidth: 1,
    borderColor: 'orangered',
  },
});
