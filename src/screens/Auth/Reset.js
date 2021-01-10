import React from 'react';
import {View, TextInput} from 'react-native';
import {Button, Text, Content, Container} from 'native-base';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import HeadlineText from '../../components/HeadlineText/HeadlineText';

import styles from './styles';

const Reset = ({navigation}) => {
  const [value, onChangeText] = React.useState('');
  return (
    <Container>
      <CustomHeader
        leftIcon="arrow-left"
        leftIconRoute={() => navigation.goBack()}
      />
      <HeadlineText condition="Reset password" />
      <Content style={styles.formWrapper}>
        <Text style={{marginLeft: 20, fontSize: 14, color: 'red'}}>
          You need to change your password to activate your account.
        </Text>
        <View onChangeText={(val) => onChangeText(val)} style={styles.formBox}>
          <TextInput secureTextEntry style={styles.inputBox} />
          <Text style={styles.text}>New Password</Text>
        </View>
        <View onChangeText={(val) => onChangeText(val)} style={styles.formBox}>
          <TextInput secureTextEntry style={styles.inputBox} />
          <Text style={styles.text}>Confirmation New Password</Text>
        </View>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{marginLeft: 120}}>Reset Password</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Reset;
