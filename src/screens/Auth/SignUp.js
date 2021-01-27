import React, {useState} from 'react';
import axios from 'axios';
import {Alert, View, TextInput, ToastAndroid} from 'react-native';
import {Button, Text, Content, Container} from 'native-base';
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
    } else if (store === '') {
      setError('Fill your store name');
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
        .post(`${API_URL_DEVELOPMENT}auth/register`, data)
        .then(async (res) => {
          // Alert.alert(
          //   'Register',
          //   'Successfully register',
          //   [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          //   {cancelable: false},
          // );
          navigation.navigate('Profile');
        })
        .catch((err) => setError(err.response.data.msg));
    }
  };
  console.log(type);
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
          style={{
            backgroundColor: type === 1 ? '#DB3022' : '#fff',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
          }}>
          <Text style={{color: type === 1 ? '#fff' : '#DB3022'}}>Consumer</Text>
        </Button>
        <Button
          onPress={() => {
            setType(2);
          }}
          style={{
            backgroundColor: type === 2 ? '#DB3022' : '#fff',
            paddingHorizontal: 20,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
          }}>
          <Text style={{color: type === 2 ? '#fff' : '#DB3022'}}>Seller</Text>
        </Button>
      </View>
      <Text style={styles.errorMsg}>{error}</Text>
      <Content style={styles.formWrapper}>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setName(val)}
            defaultValue={name}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Name</Text>
        </View>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setEmail(val)}
            defaultValue={email}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Email</Text>
        </View>
        {type === 2 && (
          <View style={styles.formBox}>
            <TextInput
              onChangeText={(val) => setStore(val)}
              defaultValue={store}
              style={styles.inputBox}
            />
            <Text style={styles.text}>Store Name</Text>
          </View>
        )}
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setNumber(val)}
            defaultValue={number}
            keyboardType="phone-pad"
            style={styles.inputBox}
          />
          <Text style={styles.text}>Telephone</Text>
        </View>
        <View defaultValue={password} style={styles.formBox}>
          <TextInput
            secureTextEntry
            onChangeText={(val) => setPassword(val)}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Password</Text>
        </View>
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
          style={styles.button}
          onPress={() => {
            showToastWithGravityAndOffset();
            handleSubmit();
          }}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default SignUp;
