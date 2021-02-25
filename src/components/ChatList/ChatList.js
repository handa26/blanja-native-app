/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {API_URL_DEVELOPMENT} from '@env';

const List = ({navigation, chatRoom}) => {
  const auth = useSelector((state) => state.auth);
  const [name, setName] = useState('loading');

  const getName = () => {
    if (auth.level === 'seller') {
      axios
        .get(
          API_URL_DEVELOPMENT + '/user/' + chatRoom.split('S')[1].split('B')[0],
        )
        .then(({data}) => {
          setName(data.name);
        });
    } else {
      axios
        .get(
          API_URL_DEVELOPMENT + '/user/' + chatRoom.split('S')[1].split('B')[1],
        )
        .then(({data}) => {
          setName(data.name);
        });
    }
  };
  useEffect(() => {
    getName();
  }, [chatRoom, getName]);

  return (
    <>
      <View>
        <TouchableOpacity
          style={{
            borderBottomColor: 'gray',
            borderBottomWidth: 0.2,
            marginLeft: 10,
            marginRight: 40,
          }}
          onPress={() => {
            navigation.navigate('Chat', {
              roomId: chatRoom,
            });
          }}>
          <View style={{paddingLeft: 10, marginTop: 5}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 5}}>
              {name}
            </Text>
            <Text style={{color: 'gray', marginBottom: 10}}>
              ChatRoom {chatRoom}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default List;
