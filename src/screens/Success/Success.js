import React from 'react';
import {View, ImageBackground, StyleSheet, StatusBar} from 'react-native';
import {Text} from 'native-base';
import {Button} from 'react-native-elements';

import successBg from '../../assets/images/success-bg.png';

const Success = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground source={successBg} style={styles.image}>
        <View style={styles.child}>
          <View style={styles.message}>
            <Text style={styles.text}>Success</Text>
            <Text style={styles.desc}>
              Your order will be delivered soon. Thank you for choosing our app!
            </Text>
            <Button
              title="Continue Shopping"
              onPress={() => navigation.navigate('Home')}
              buttonStyle={styles.button}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // backgroundColor: '#000000a0',
  },
  text: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  desc: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 70,
    color: 'white',
  },
  child: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  message: {
    marginTop: 300,
  },
  button: {
    textAlign: 'center',
    marginHorizontal: 125,
    marginTop: 24,
    borderRadius: 50,
    backgroundColor: '#DB3022',
  },
});
