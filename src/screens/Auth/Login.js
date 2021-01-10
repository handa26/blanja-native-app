import React from 'react';
import {View, TextInput} from 'react-native';
import {Button, Text, Content, Container} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import HeadlineText from '../../components/HeadlineText/HeadlineText';

import styles from './styles';

const Login = ({navigation}) => {
  const [value, onChangeText] = React.useState('');
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
            onChangeText={(val) => onChangeText(val)}
            style={styles.inputBox}
          />
          <Text onChangeText={(val) => onChangeText(val)} style={styles.text}>
            Email
          </Text>
        </View>
        <View onChangeText={(val) => onChangeText(val)} style={styles.formBox}>
          <TextInput secureTextEntry style={styles.inputBox} />
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
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Login;
