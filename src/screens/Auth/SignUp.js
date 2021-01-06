import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Button, Text, Content, Container} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUp = ({navigation}) => {
  const [value, onChangeText] = React.useState('');
  return (
    <Container>
      <Content style={styles.formWrapper}>
        <Text style={styles.head}>Sign Up</Text>
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
          <Text style={{marginLeft: 125}}>Sign Up</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  formWrapper: {
    marginTop: 130,
  },
  head: {
    marginLeft: 35,
    fontSize: 34,
    fontWeight: 'bold',
  },
  formBox: {
    position: 'relative',
    marginVertical: 20,
    marginHorizontal: 35,
  },
  text: {
    position: 'absolute',
    fontSize: 11,
    color: 'gray',
    top: 8,
    left: 10,
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 343,
    marginLeft: 35,
    position: 'relative',
    marginVertical: 20,
    justifyContent: 'flex-end',
  },
  longText: {fontSize: 14, marginRight: 10},
  textIcon: {
    color: '#DADADA',
  },
  inputBox: {
    width: 343,
    height: 64,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#f1f1f1',
  },
  button: {
    width: 343,
    height: 48,
    marginLeft: 35,
    backgroundColor: '#DB3022',
    borderRadius: 50,
  },
});
