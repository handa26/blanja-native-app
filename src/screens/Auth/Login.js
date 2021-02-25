import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {login} from '../../public/redux/action/authAction';
import {View, TextInput, ToastAndroid} from 'react-native';
import {Text, Content, Container} from 'native-base';
import {Button, Input} from 'react-native-elements';
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
        .post(`${API_URL_DEVELOPMENT}/auth/login`, data)
        .then(async (res) => {
          const token = res.data.data.token;
          const id = res.data.data.id;
          const types = res.data.data.type;
          const name = res.data.data.name;
          const email = res.data.data.email;
          login(token, id, types, name, email);
          showToastWithGravityAndOffset();
          navigation.navigate('Profile');
        })
        .catch((err) => setError('Invalid email/password'));
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
        <Input
          placeholder="Email"
          onChangeText={(val) => setEmail(val)}
          inputContainerStyle={styles.inputBox}
        />
        <Input
          placeholder="Password"
          onChangeText={(val) => setPassword(val)}
          inputContainerStyle={styles.inputBox}
          secureTextEntry={true}
        />
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
          onPress={() => {
            handleSubmit();
          }}
          title="Login"
          buttonStyle={styles.button}
        />
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
