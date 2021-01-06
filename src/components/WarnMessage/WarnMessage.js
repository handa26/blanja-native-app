import React from 'react';
import {View, Image} from 'react-native';
import {Header, Left, Button, Body, Title, Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import warning from '../../assets/icons/no-notification.png';

const WarnMessage = ({navigation}) => {
  return (
    <View>
      <Header style={styles.header}>
        <Left>
          <Button transparent>
            <Icon
              name="arrow-left"
              size={25}
              onPress={() => navigation.goBack()}
            />
          </Button>
        </Left>
        <Body>
          <Title style={{color: 'black'}}>Notification</Title>
        </Body>
        <Right />
      </Header>
      <View style={styles.wrapper}>
        <Image source={warning} style={styles.image} />
      </View>
    </View>
  );
};

export default WarnMessage;
