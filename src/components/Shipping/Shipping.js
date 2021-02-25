import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Item, Spinner, Input} from 'native-base';
import {Button} from 'react-native-elements';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import CustomHeader from '../CustomHeader/CustomHeader';
import ShippingCard from '../ShippingCard/ShippingCard';
import {API_URL_DEVELOPMENT} from '@env';

const Shipping = ({navigation}) => {
  const userId = useSelector((state) => state.auth.id);
  const [address, setAddress] = useState();

  useEffect(() => {
    axios
      .get(`${API_URL_DEVELOPMENT}/address/${userId}`)
      .then(({data}) => {
        setAddress(data.data);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  return (
    <ScrollView>
      <CustomHeader
        leftIcon="arrow-left"
        leftIconRoute={() => navigation.goBack()}
        name="Shipping Address"
      />
      <View>
        <Item style={styles.input}>
          <Icon name="search" size={15} style={{marginLeft: 10}} />
          <Input placeholder="Search" />
        </Item>
        {/* <Input
          inputStyle={styles.input}
          leftIcon={<Icon name="search" size={15} style={{marginLeft: 10}} />}
        /> */}
        <Text style={styles.headlineText}>Shipping address</Text>
        {address ? (
          address &&
          address.map((data) => {
            return (
              <ShippingCard
                key={data.id}
                street={data.street}
                name={data.name}
                postalCodes={data.postal_codes}
                province={data.province}
                city={data.city}
              />
            );
          })
        ) : (
          <Spinner />
        )}
        <Button
          title="Add New Address"
          type="outline"
          titleStyle={{color: 'black'}}
          onPress={() => navigation.navigate('Address')}
          buttonStyle={styles.button}
        />
      </View>
    </ScrollView>
  );
};

export default Shipping;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingVertical: 35,
    marginTop: 20,
  },
  input: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginLeft: 10,
    marginTop: 15,
    borderRadius: 30,
    width: wp('95%'),
    height: 50,
    marginBottom: 20,
  },
  headlineText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 15,
  },
  button: {
    height: 48,
    marginVertical: 15,
    borderColor: 'black',
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 50,
  },
});
