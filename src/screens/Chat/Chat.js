/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {View, StyleSheet, TextInput, FlatList} from 'react-native';
import {Button, Text, Container} from 'native-base';
import {
  widthPercentageToDP as vw,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {useSocket} from '../../public/context/SocketProvider';
import {API_URL_DEVELOPMENT} from '@env';

let number = 0;

const Chat = ({navigation, route}) => {
  const socket = useSocket();
  const {roomId} = route.params;

  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const splitRoom = roomId.split('S')[1].split('B');
  const seller = splitRoom[0];
  const buyer = splitRoom[1];

  const token = useSelector((state) => state.auth.token);
  const sender = useSelector((state) => state.auth.id);

  useEffect(() => {
    getName();
    getNewMessage();
  }, [getName]);

  useSocket(() => {
    socket.on('refresh', (someEvent) => {
      console.log(`Refresh to ${number}`);
      getNewMessage();
    });
    return () => socket.off('refresh');
  }, [number]);

  const config = {
    headers: {
      'x-access-token': 'Bearer ' + token,
    },
  };

  const getName = () => {
    if (sender !== buyer) {
      axios
        .get(API_URL_DEVELOPMENT + '/user/' + buyer)
        .then(({data}) => {
          setName(data.name);
        })
        .catch((err) => console.log(err.response));
    } else {
      axios
        .get(API_URL_DEVELOPMENT + '/user/' + seller)
        .then(({data}) => {
          setName(data.name);
        })
        .catch((err) => console.log(err));
    }
  };

  const sendMessage = () => {
    if (message !== '') {
      const msgData = {
        seller: seller,
        buyer: buyer,
        chat_room: roomId,
        sender: sender,
        message: message,
      };
      axios
        .post(`${API_URL_DEVELOPMENT}/chat`, msgData, config)
        .then(({data}) => {
          setMessage('');
          number = number + 1;
        })
        .catch((err) => console.log(err.response));
    }
  };

  const getNewMessage = () => {
    axios
      .get(`${API_URL_DEVELOPMENT}/chat/${roomId}`)
      .then((data) => {
        setChat(data.data);
      })
      .catch((err) => console.log(err.response.data.details));
  };

  console.log(chat);
  return (
    <Container>
      <CustomHeader
        leftIconRoute={() => navigation.goBack()}
        name={route.params.productName}
        leftIcon="arrow-left"
      />
      <View>
        <FlatList
          data={chat.data}
          style={{marginBottom: hp('20%')}}
          inverted
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) =>
            item.sender_id === sender ? (
              <View style={styles.chatWrapper}>
                <View />
                <View style={styles.chatBubbleWrapper}>
                  <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
                    <Text style={styles.chatSender}>You</Text>
                    <Text>{item.message}</Text>
                  </View>
                  {/* <Text style={styles.chatText}>
                    {item.created_at.toString().split('T')[0]} |{' '}
                    {item.created_at.toString().split('T')[1].substr(0, 5)}
                  </Text> */}
                </View>
              </View>
            ) : (
              <View style={styles.chatWrapper}>
                <View style={styles.chatBubbleRecieverWrapper}>
                  <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
                    <Text style={styles.chatReceiver}>{item.sender_name}</Text>
                    <Text>{item.message}</Text>
                    {/* <Text style={styles.chatText}>
                      {item.created_at.toString().split('T')[0]} |{' '}
                      {item.created_at.toString().split('T')[1].substr(0, 5)}
                    </Text> */}
                  </View>
                </View>
                <View />
              </View>
            )
          }
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.formWrapper}>
          <View style={styles.formBox}>
            <TextInput
              style={styles.inputBox}
              onChangeText={(val) => setMessage(val)}
            />
            <Button style={styles.btn} onPress={() => sendMessage()}>
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
    marginVertical: 15,
  },
  formBox: {
    position: 'relative',
    marginVertical: 5,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBox: {
    width: vw('80%'),
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: 'black',
    padding: 10,
  },
  btn: {
    backgroundColor: '#DB3022',
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  footer: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    alignSelf: 'center',
    width: vw('100%'),
  },
  chatWrapper: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chatBubbleWrapper: {
    borderColor: 'red',
    backgroundColor: 'white',
    borderWidth: 1,
    minWidth: vw('25%'),
    maxWidth: vw('60%'),
    borderRadius: 5,
    marginHorizontal: vw('1%'),
  },
  chatBubbleRecieverWrapper: {
    borderColor: 'red',
    backgroundColor: '#f1f1f1',
    borderWidth: 1,
    minWidth: vw('25%'),
    maxWidth: vw('60%'),
    borderRadius: 5,
    marginHorizontal: vw('1%'),
  },
  chatSender: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'red',
  },
  chatReceiver: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'red',
  },
  chatText: {
    fontSize: 10,
    marginTop: 8,
    color: 'gray',
    textAlign: 'right',
  },
});
