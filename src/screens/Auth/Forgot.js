import React from 'react';
import {View, TextInput} from 'react-native';
import {Button, Text, Content, Container} from 'native-base';
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
        <Text style={{marginLeft: 20, fontSize: 14}}>
          Please, enter your email address. You will receive a link to create a
          new password via email.
        </Text>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => onChangeText(val)}
            style={styles.inputBox}
          />
          <Text onChangeText={(val) => onChangeText(val)} style={styles.text}>
            Email
          </Text>
        </View>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('Reset')}>
          <Text style={styles.buttonText}>Send</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Forgot;
