import React from 'react';
import {View, TextInput} from 'react-native';
import {Text, Content, Container} from 'native-base';
import {Button, Input} from 'react-native-elements';

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
        <Text
          style={{
            marginHorizontal: 10,
            marginBottom: 10,
            fontSize: 14,
            color: 'red',
          }}>
          You need to change your password to activate your account.
        </Text>
        <Input
          placeholder="New Password"
          onChangeText={(val) => onChangeText(val)}
          secureTextEntry={true}
          inputContainerStyle={styles.inputBox}
        />
        <Input
          placeholder="Confirmation New Password"
          onChangeText={(val) => onChangeText(val)}
          secureTextEntry={true}
          inputContainerStyle={styles.inputBox}
        />
        <Button
          onPress={() => {
            navigation.navigate('Login');
          }}
          title="Reset Password"
          buttonStyle={styles.button}
        />
      </Content>
    </Container>
  );
};

export default Reset;
