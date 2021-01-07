import React from 'react';
import {View} from 'react-native';
import {Header, Left, Button, Body, Title, Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const CustomHeader = ({
  name,
  leftIcon,
  leftIconRoute,
  rightIcon,
  rightIconRoute,
}) => {
  return (
    <View>
      <Header style={styles.header}>
        <Left>
          <Button transparent>
            <Icon name={leftIcon} size={25} onPress={leftIconRoute} />
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>{name}</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name={rightIcon} size={25} onPress={rightIconRoute} />
          </Button>
        </Right>
      </Header>
    </View>
  );
};

export default CustomHeader;
