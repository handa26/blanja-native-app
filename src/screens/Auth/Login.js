import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {login} from '../../public/redux/action/authAction';
import {View, TextInput} from 'react-native';
import {Button, Text, Content, Container} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import HeadlineText from '../../components/HeadlineText/HeadlineText';

import styles from './styles';

const Login = ({navigation, login}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = () => {
    const data = {
      email: email,
      password: password,
    };
    axios
      .post('http://192.168.8.101:3000/auth/login', data)
      .then(async (res) => {
        console.log(res);
        // console.log('This is token', res.data.data.token);
        // console.log('This is user id', res.data.data.id);
        // console.log('This is user types', res.data.data.type);

        const token = res.data.data.token;
        const id = res.data.data.id;
        const types = res.data.data.type;
        login(token, id, types);
        console.log('Successfully login');
        navigation.navigate('Profile');
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <CustomHeader
        leftIcon="arrow-left"
        leftIconRoute={() => navigation.goBack()}
      />
      <HeadlineText condition="Login" />
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
        <Button style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>
      </Content>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (token, id, level) => dispatch(login(token, id, level)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
