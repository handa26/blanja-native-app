import React, {useState} from 'react';
import axios from 'axios';
import {View, ToastAndroid} from 'react-native';
import {Text, Content, Container} from 'native-base';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import HeadlineText from '../../components/HeadlineText/HeadlineText';
import {API_URL_DEVELOPMENT} from '@env';

import styles from './styles';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [store, setStore] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState(1);
  const [error, setError] = useState('');

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Signup successfully',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  const handleSubmit = () => {
    if (
      name === '' &&
      email === '' &&
      number === '' &&
      password === '' &&
      store === ''
    ) {
      setError('Please fill all form field');
    } else if (email === '') {
      setError('Fill your email');
    } else if (number === '') {
      setError('Fill your phone number');
    } else if (password === '') {
      setError('Fill your password');
    } else {
      const data = {
        name: name,
        email: email,
        store_name: store,
        telephone: number,
        user_type: type,
        password: password,
      };

      axios
        .post(`${API_URL_DEVELOPMENT}/auth/register`, data)
        .then(async (res) => {
          navigation.navigate('Login');
          showToastWithGravityAndOffset();
        })
        .catch((err) => setError(err.response.data.msg));
    }
  };
  return (
    <Container>
      <CustomHeader
        leftIcon="arrow-left"
        leftIconRoute={() => navigation.goBack()}
      />
      <HeadlineText condition="Sign Up" />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Button
          onPress={() => {
            setType(1);
          }}
          buttonStyle={{
            backgroundColor: type === 1 ? '#DB3022' : '#fff',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
          }}
          title="Customer"
          titleStyle={{color: type === 1 ? '#fff' : '#DB3022'}}
        />
        <Button
          onPress={() => {
            setType(2);
          }}
          buttonStyle={{
            backgroundColor: type === 2 ? '#DB3022' : '#fff',
            paddingHorizontal: 20,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
          }}
          title="seller"
          titleStyle={{color: type === 2 ? '#fff' : '#DB3022'}}
        />
      </View>
      <Text style={styles.errorMsg}>{error}</Text>
      <Content style={styles.formWrapper}>
        <Input
          placeholder="Name"
          onChangeText={(val) => setName(val)}
          inputContainerStyle={styles.inputBox}
        />
        <Input
          placeholder="Email"
          onChangeText={(val) => setEmail(val)}
          inputContainerStyle={styles.inputBox}
        />
        {type === 2 && (
          <Input
            placeholder="Store Name"
            onChangeText={(val) => setStore(val)}
            inputContainerStyle={styles.inputBox}
          />
        )}
        <Input
          placeholder="Telephone"
          onChangeText={(val) => setNumber(val)}
          inputContainerStyle={styles.inputBox}
          keyboardType="phone-pad"
        />
        <Input
          placeholder="Password"
          onChangeText={(val) => setPassword(val)}
          inputContainerStyle={styles.inputBox}
          secureTextEntry={true}
        />
        <View style={styles.textBox}>
          <Text style={styles.longText}>Already have an account?</Text>
          <Icon
            name="long-arrow-right"
            color="#DB3022"
            size={15}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
        <Button
          title="Sign Up"
          onPress={() => {
            handleSubmit();
          }}
          buttonStyle={styles.button}
        />
      </Content>
    </Container>
  );
};

export default SignUp;
