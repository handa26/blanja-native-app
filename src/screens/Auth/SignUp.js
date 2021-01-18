import React, {useState} from 'react';
import axios from 'axios';
import {View, TextInput} from 'react-native';
import {Button, Text, Content, Container} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import HeadlineText from '../../components/HeadlineText/HeadlineText';
import styles from './styles';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [store, setStore] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <CustomHeader
        leftIcon="arrow-left"
        leftIconRoute={() => navigation.goBack()}
      />
      <HeadlineText condition="Sign Up" />
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
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setStore(val)}
            defaultValue={store}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Store Name</Text>
        </View>
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
        <Button style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default SignUp;
