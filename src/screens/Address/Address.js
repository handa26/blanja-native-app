import React, {useState} from 'react';
import axios from 'axios';
import {View, StyleSheet, ToastAndroid, TextInput} from 'react-native';
import {Button, Text, Content, Container} from 'native-base';
import {useSelector} from 'react-redux';

import CustomHeader from '../../components/CustomHeader/CustomHeader';
import HeadlineText from '../../components/HeadlineText/HeadlineText';
import {API_URL_DEVELOPMENT} from '@env';

const Address = ({navigation}) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postal, setPostal] = useState('');
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [error, setError] = useState('');
  const userId = useSelector((state) => state.auth.id);

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Successfully add new address',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  const handleSubmit = () => {
    const data = {
      name: name,
      city: city,
      province: province,
      postal_codes: postal,
      country: country,
      user_id: userId,
      street: street,
    };
    axios
      .post(`${API_URL_DEVELOPMENT}address`, data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <CustomHeader
        leftIcon="arrow-left"
        leftIconRoute={() => navigation.goBack()}
      />
      <HeadlineText condition="Address" />
      <Content style={styles.formWrapper}>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setName(val)}
            defaultValue={name}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Name</Text>
        </View>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setCity(val)}
            defaultValue={city}
            style={styles.inputBox}
          />
          <Text style={styles.text}>City</Text>
        </View>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setStreet(val)}
            defaultValue={street}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Street</Text>
        </View>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setProvince(val)}
            defaultValue={province}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Province</Text>
        </View>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setPostal(val)}
            defaultValue={postal}
            keyboardType="phone-pad"
            style={styles.inputBox}
          />
          <Text style={styles.text}>Postal Codes</Text>
        </View>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setCountry(val)}
            defaultValue={country}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Country</Text>
        </View>
        <Button
          style={styles.button}
          onPress={() => {
            handleSubmit();
            showToastWithGravityAndOffset();
            navigation.navigate('Profile');
          }}>
          <Text style={styles.buttonText}>Add Now</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default Address;

const styles = StyleSheet.create({
  formWrapper: {
    marginTop: 50,
  },
  formBox: {
    position: 'relative',
    marginVertical: 20,
    marginHorizontal: 20,
    // marginLeft: 20,
  },
  text: {
    position: 'absolute',
    fontSize: 11,
    color: 'gray',
    top: 8,
    left: 10,
  },
  inputBox: {
    width: 390,
    height: 64,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'black',
    padding: 10,
  },
  button: {
    position: 'relative',
    width: 390,
    height: 48,
    marginLeft: 20,
    backgroundColor: '#DB3022',
    borderRadius: 50,
    marginBottom: 20,
  },
  buttonText: {
    position: 'absolute',
    left: 153,
  },
});
