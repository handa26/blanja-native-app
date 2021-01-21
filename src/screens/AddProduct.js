import React, {useState} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {View, Alert, StyleSheet, TextInput} from 'react-native';
import {Button, Text, Content, Container} from 'native-base';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import HeadlineText from '../components/HeadlineText/HeadlineText';
import {API_URL_DEVELOPMENT} from '@env';

const AddProduct = ({navigation}) => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [filePath, setFilePath] = useState([]);
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [rating, setRating] = useState('');
  const [size, setSize] = useState('');
  const [brand, setBrand] = useState('');
  const [quantity, setQuantity] = useState('');
  const [color, setColor] = useState('');
  const token = useSelector((state) => state.auth.token);

  const handleSubmit = async () => {
    const config = {
      headers: {
        'x-access-token': 'Bearer ' + token,
        'Content-type': 'multipart/form-data',
      },
    };
    const data = new FormData();
    data.append('product_name', productName);
    data.append('product_brand', brand);
    data.append('category_id', category);
    data.append('product_price', price);
    data.append('product_description', desc);
    data.append('size', size);
    data.append('product_color', color);
    data.append('product_qty', quantity);
    data.append('product_rating', rating);

    axios
      .post(`${API_URL_DEVELOPMENT}product`, data, config)
      .then((res) => {
        console.log(res);
        Alert.alert(
          `Success`,
          'Successfully added product',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <CustomHeader
        leftIcon="arrow-left"
        leftIconRoute={() => navigation.goBack()}
      />
      <HeadlineText condition="Add Product" />
      <Content style={styles.formWrapper}>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setProductName(val)}
            defaultValue={productName}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Product Name</Text>
        </View>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setBrand(val)}
            defaultValue={brand}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Product Brand</Text>
        </View>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setDesc(val)}
            defaultValue={desc}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Product Description</Text>
        </View>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setPrice(val)}
            defaultValue={price}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Product Price</Text>
        </View>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setSize(val)}
            defaultValue={size}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Product Size</Text>
        </View>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setCategory(val)}
            defaultValue={category}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Category</Text>
        </View>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setRating(val)}
            defaultValue={rating}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Product rating</Text>
        </View>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setQuantity(val)}
            defaultValue={quantity}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Product quantity</Text>
        </View>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setColor(val)}
            defaultValue={color}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Product Color</Text>
        </View>
        <Button
          style={styles.button}
          onPress={() => {
            handleSubmit();
            navigation.navigate('Home');
          }}>
          <Text style={styles.buttonText}>Add Now</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  formWrapper: {
    marginTop: 50,
  },
  head: {
    marginLeft: 35,
    fontSize: 34,
    fontWeight: 'bold',
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
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 343,
    marginLeft: 60,
    position: 'relative',
    marginVertical: 20,
    justifyContent: 'flex-end',
  },
  longText: {fontSize: 14, marginRight: 10},
  textIcon: {
    color: '#DADADA',
  },
  inputBox: {
    width: 390,
    height: 64,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#f1f1f1',
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
