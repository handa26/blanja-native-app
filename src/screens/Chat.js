import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import {useSelector} from 'react-redux';
import {View, StyleSheet, TextInput} from 'react-native';
import {Button, Text, Content, Container} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomHeader from '../components/CustomHeader/CustomHeader';

const socket = io('http://192.168.8.100:3000');

const Chat = ({navigation, route}) => {
  const [state, setState] = useState('');
  const [chat, setChat] = useState([]);
  const user_name = useSelector((state) => state.auth.name);

  useEffect(() => {
    socket.on('message', (msg) => {
      setChat((chat) => [...chat, msg]);
    });
    return () => {
      socket.off('message');
    };
  }, []);

  const submitChatMessage = () => {
    // Prevent firing empty message
    if (state.length !== 0) {
      socket.emit('message', {state});
      setState('');
    }
  };

  return (
    <Container>
      <CustomHeader
        leftIconRoute={() => navigation.goBack()}
        name={route.params.productName}
        leftIcon="arrow-left"
      />
      <View style={{backgroundColor: 'lightgrey'}}>
        {chat.length !== 0 &&
          chat.map(({state}, index) => {
            return (
              <View key={index}>
                <Text>{user_name}</Text>
                <Text>{state}</Text>
              </View>
            );
          })}
      </View>
      <View style={styles.footer}>
        <View style={styles.formWrapper}>
          <View style={styles.formBox}>
            <TextInput
              onChangeText={(chatMessage) => {
                setState(chatMessage);
              }}
              value={state}
              style={styles.inputBox}
            />
          </View>
          <Button block style={styles.btn} onPress={submitChatMessage}>
            <Text>Send</Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default Chat;

const styles = StyleSheet.create({
  formWrapper: {
    marginTop: 50,
  },
  formBox: {
    position: 'relative',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  inputBox: {
    width: 390,
    height: 64,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#f1f1f1',
    padding: 10,
  },
  btn: {
    backgroundColor: '#DB3022',
  },
  chatHead: {
    fontSize: 24,
    marginLeft: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: 390,
  },
});
