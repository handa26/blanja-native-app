import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  Platform,
  Alert,
} from 'react-native';
import {Button, Text, Content, Container} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import ImagePicker from 'react-native-image-crop-picker';

import CustomHeader from '../components/CustomHeader/CustomHeader';
import HeadlineText from '../components/HeadlineText/HeadlineText';
import {API_URL_DEVELOPMENT, IP_DEVELOPMENT} from '@env';

const EditProduct = ({route, navigation}) => {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState({});
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState();
  const [filePath, setFilePath] = useState([]);
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState('');
  const [size, setSize] = useState('');
  const [brand, setBrand] = useState('');
  const [quantity, setQuantity] = useState([]);
  const [color, setColor] = useState('');
  const [capture, setCapture] = useState({});
  const token = useSelector((state) => state.auth.token);
  const {Itemid} = route.params;

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
    for (let i = 0; i < filePath.length; i++) {
      data.append('image', {
        name: filePath[i].path.split('/').pop(),
        type: filePath[i].mime,
        uri:
          Platform.OS === 'android'
            ? filePath[i].path
            : filePath[i].path.replace('file://', ''),
      });
    }

    if (capture.length > 0) {
      data.append('image', {
        name: capture.path.split('/').pop(),
        type: capture.mime,
        uri:
          Platform.OS === 'android'
            ? capture.path
            : capture.path.replace('file://', ''),
      });
    }

    axios
      .patch(`${API_URL_DEVELOPMENT}product/${Itemid}`, data, config)
      .then((res) => {
        console.log(res);
        Alert.alert(
          `Success`,
          'Successfully updated product',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`${API_URL_DEVELOPMENT}product/${Itemid}`)
      .then(({data}) => {
        let splitter = data.image.split(',');
        setImage(splitter.map((e) => e.replace('localhost', IP_DEVELOPMENT)));
        setProduct(data);
      })
      .catch((err) => console.log(err));
  }, [Itemid]);

  const chooseImages = () => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
    })
      .then((images) => {
        console.log(images);
        setFilePath(images);
      })
      .catch((err) => console.log(err));
  };

  const captureImages = () => {
    ImagePicker.openCamera({
      width: 200,
      height: 200,
      cropping: true,
      mediaType: 'photo',
    })
      .then((images) => {
        setCapture(images);
        console.log(images);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <CustomHeader
        leftIcon="arrow-left"
        leftIconRoute={() => navigation.goBack()}
      />
      <HeadlineText condition="Update Product" />
      <Content>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setProductName(val)}
            defaultValue={product.product_name}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Product Name</Text>
        </View>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setBrand(val)}
            defaultValue={product.product_brand}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Product Brand</Text>
        </View>
        <View style={styles.formBox}>
          <Text>Choose your product image from your storage</Text>
          <ScrollView horizontal style={styles.imagesHolder}>
            {filePath.map((item) => {
              return (
                <Image
                  key={filePath.indexOf(item)}
                  source={{uri: filePath.length !== 0 ? item.path : ''}}
                  style={{
                    width: 200,
                    height: 200,
                    marginHorizontal: 10,
                    alignSelf: 'center',
                  }}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.formBox}>
          <Button iconLeft block rounded onPress={() => chooseImages()}>
            <Icon name="plus" size={20} />
            <Text>Choose an image to upload</Text>
          </Button>
        </View>
        <View style={styles.formBox}>
          <Text>Capture your product</Text>
          <ScrollView horizontal style={styles.imagesHolder}>
            <Image
              source={{uri: capture.path}}
              style={{
                width: 200,
                height: 200,
                marginHorizontal: 10,
                alignSelf: 'center',
              }}
            />
          </ScrollView>
        </View>
        <View style={styles.formBox}>
          <Button iconLeft block rounded onPress={captureImages}>
            <Icon name="camera" size={20} />
            <Text>Capture your photo</Text>
          </Button>
        </View>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setDesc(val)}
            defaultValue={product.product_description}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Product Description</Text>
        </View>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setPrice(val)}
            defaultValue={String(product.product_price)}
            style={styles.inputBox}
            keyboardType="numeric"
          />
          <Text style={styles.text}>Product Price</Text>
        </View>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setSize(val)}
            defaultValue={String(product.size)}
            style={styles.inputBox}
            keyboardType="numeric"
          />
          <Text style={styles.text}>Product Size</Text>
        </View>
        {/* <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setRating(val)}
            defaultValue={rating}
            style={styles.inputBox}
            keyboardType="numeric"
          />
          <Text style={styles.text}>Product rating</Text>
        </View> */}
        <View style={styles.formBox}>
          <Text>Product category</Text>
          <Picker
            selectedValue={category}
            style={{height: 50, width: 150}}
            onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
            <Picker.Item label="Shirt" value={1} />
            <Picker.Item label="Pants" value={2} />
            <Picker.Item label="Shoes" value={3} />
          </Picker>
        </View>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setQuantity(val)}
            defaultValue={String(product.product_qty)}
            style={styles.inputBox}
            keyboardType="numeric"
          />
          <Text style={styles.text}>Product quantity</Text>
        </View>
        <View style={styles.formBox}>
          <TextInput
            onChangeText={(val) => setColor(val)}
            defaultValue={product.product_color}
            style={styles.inputBox}
          />
          <Text style={styles.text}>Product Color</Text>
        </View>
        <Button
          style={styles.button}
          onPress={() => {
            handleSubmit();
            navigation.navigate('MyProducts');
          }}>
          <Text style={styles.buttonText}>Update Now</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default EditProduct;

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
    left: 130,
  },
  buttonChoose: {
    width: 200,
    height: 20,
    marginLeft: 20,
  },
  imagesHolder: {
    width: 390,
    height: 250,
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 10,
  },
});
