import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {login} from '../../public/redux/action/authAction';
import {View, TextInput, ToastAndroid} from 'react-native';
import {Button, Text, Content, Container} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import HeadlineText from '../../components/HeadlineText/HeadlineText';
import {API_URL_DEVELOPMENT} from '@env';

import styles from './styles';

const Login = ({navigation, login}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Login successfully',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  const handleSubmit = () => {
    if (email === '' && password === '') {
      setError('Please fill all form field');
    } else if (email === '') {
      setError('Email field cannot be empty');
    } else if (password === '') {
      setError('Password field cannot be empty');
    } else {
      const data = {
        email: email,
        password: password,
      };
      axios
        .post(`${API_URL_DEVELOPMENT}auth/login`, data)
        .then(async (res) => {
          // console.log(res);
          // console.log('This is token', res.data.data.token);
          // console.log('This is user id', res.data.data.id);
          // console.log('This is user types', res.data.data.type);
          // console.log(res.data.data.name);
          // console.log(res.data.data.email);

          const token = res.data.data.token;
          const id = res.data.data.id;
          const types = res.data.data.type;
          const name = res.data.data.name;
          const email = res.data.data.email;
          login(token, id, types, name, email);
          console.log('Successfully login');
          showToastWithGravityAndOffset();
          navigation.navigate('Profile');
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
      <HeadlineText condition="Login" />
      <Text style={styles.errorMsg}>{error}</Text>
      <Content style={styles.formWrapper}>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setEmail(val)}
            defaultValue={email}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Email</Text>
        </View>
        <View style={styles.formBox}>
          <TextInput
            secureTextEntry
            onChangeText={(val) => setPassword(val)}
            defaultValue={password}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Password</Text>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.longText}>Forgot your password?</Text>
          <Icon
            name="long-arrow-right"
            color="#DB3022"
            size={15}
            onPress={() => navigation.navigate('Forgot')}
          />
        </View>
        <Button
          style={styles.button}
          onPress={() => {
            handleSubmit();
          }}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>
      </Content>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (token, id, level, name, email) =>
      dispatch(login(token, id, level, name, email)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
