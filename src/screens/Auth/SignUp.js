import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {Button, Text, Content, Container} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import HeadlineText from '../../components/HeadlineText/HeadlineText';
import styles from './styles';

const SignUp = ({navigation}) => {
  const [value, onChangeText] = useState('');
  return (
    <Container>
      <CustomHeader
        leftIcon="arrow-left"
        leftIconRoute={() => navigation.goBack()}
      />
      <HeadlineText condition="Sign Up" />
      <Content style={styles.formWrapper}>
        {/* <Text style={styles.head}>Sign Up</Text> */}
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => onChangeText(val)}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Name</Text>
        </View>
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
