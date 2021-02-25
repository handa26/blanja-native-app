/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {
  Container,
  Header,
  Body,
  Left,
  Content,
  View,
  Text,
  Button,
} from 'native-base';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import List from '../../components/ChatList/ChatList';
import {API_URL_DEVELOPMENT} from '@env';

const ChatList = ({navigation}) => {
  const [chatList, setChatList] = useState([]);
  const [loading, setLoading] = useState('Loading...');

  const auth = useSelector((state) => state.auth);

  const config = {
    headers: {
      'x-access-token': 'Bearer ' + auth.token,
    },
  };

  useEffect(() => {
    chatRoom();
  }, [chatRoom]);

  const chatRoom = () => {
    if (auth.level === 'seller') {
      axios
        .get(`${API_URL_DEVELOPMENT}/chat/seller`, config)
        .then(({data}) => {
          console.log(data.data);
          setChatList(data.data);
        })
        .catch((err) => console.log(err.response.data));
    } else {
      axios
        .get(`${API_URL_DEVELOPMENT}/chat/buyer`, config)
        .then(({data}) => {
          console.log(data.data);
          setChatList(data.data);
        })
        .catch((err) => console.log(err.response.data));
    }
  };

  return (
    <Container>
      <CustomHeader
        leftIconRoute={() => navigation.goBack()}
        name="Chat List"
        leftIcon="arrow-left"
      />
      <Content>
        {chatList.length > 0 ? (
          <>
            {chatList.map(({chat_room}, index) => {
              return (
                <List
                  key={index}
                  chatRoom={chat_room}
                  navigation={navigation}
                />
              );
            })}
          </>
        ) : (
          <>
            <Text style={{marginLeft: 20, fontSize: 24, fontWeight: 'bold'}}>
              There is no chat list.
            </Text>
          </>
        )}
      </Content>
    </Container>
  );
};

export default ChatList;
