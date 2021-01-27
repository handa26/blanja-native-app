import React, {useState, useEffect} from 'react';
// import io from 'socket.io-client';
import {useSelector} from 'react-redux';
import {View, StyleSheet, TextInput, ScrollView} from 'react-native';
import {Button, Text, Content, Container} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomHeader from '../components/CustomHeader/CustomHeader';

import {useSocket} from '../public/context/SocketProvider';
// const socket = io('http://192.168.8.100:3000');

const Chat = ({navigation, route}) => {
  const socket = useSocket();
  const [state, setState] = useState('');
  const [chat, setChat] = useState([]);
  const user_name = useSelector((state) => state.auth.name);
  const id = useSelector((state) => state.auth.id);

  useEffect(() => {
    socket.on('message', (msg) => {
      setChat((chat) => [...chat, msg]);
    });
    return () => {
      socket.off('message');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitChatMessage = () => {
    // Prevent firing empty message
    if (state.length !== 0) {
      // socket.emit('message', {state, sender: id}, 21);
      socket.emit('message', {state, user_name});
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
      <View>
        {chat.length !== 0 &&
          chat.map(({state, user_name}, index) => {
            return (
              <View key={index}>
                <Text style={styles.bubbleUser}>{user_name}</Text>
                <View style={styles.bubbleChat}>
                  <Text style={styles.bubbleText}>{state}</Text>
                </View>
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
            <Button style={styles.btn} onPress={submitChatMessage}>
              <Icon
                name="send"
                size={20}
                style={{marginLeft: 7}}
                color="white"
              />
            </Button>
          </View>
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
    marginVertical: 5,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBox: {
    width: 320,
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#f1f1f1',
    padding: 10,
  },
  bubbleUser: {
    marginHorizontal: 20,
    fontWeight: 'bold',
    marginBottom: 3,
    marginTop: 6,
  },
  bubbleChat: {
    backgroundColor: '#DB3022',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
  },
  bubbleText: {
    color: 'white',
  },
  btn: {
    backgroundColor: '#DB3022',
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: 390,
  },
});
