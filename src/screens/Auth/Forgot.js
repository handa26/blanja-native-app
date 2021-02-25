import React from 'react';
import {View, TextInput} from 'react-native';
import {Text, Content, Container} from 'native-base';
import {Button, Input} from 'react-native-elements';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import HeadlineText from '../../components/HeadlineText/HeadlineText';

import styles from './styles';

const Forgot = ({navigation}) => {
  const [value, onChangeText] = React.useState('');
  return (
    <Container>
      <CustomHeader
        leftIcon="arrow-left"
        leftIconRoute={() => navigation.goBack()}
      />
      <HeadlineText condition="Forgot password" />
      <Content style={styles.formWrapper}>
        <Text style={{marginHorizontal: 10, fontSize: 14, marginBottom: 10}}>
          Please, enter your email address. You will receive a link to create a
          new password via email.
        </Text>
        <Input
          placeholder="Email"
          onChangeText={(val) => onChangeText(val)}
          inputContainerStyle={styles.inputBox}
        />
        <Button
          onPress={() => {
            navigation.navigate('Reset');
          }}
          title="Send"
          buttonStyle={styles.button}
        />
      </Content>
    </Container>
  );
};

export default Forgot;
