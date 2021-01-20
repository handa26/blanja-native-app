import React, {useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// import {Picker} from '@react-native-picker/picker';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import HeadlineText from '../components/HeadlineText/HeadlineText';

const AddProduct = ({navigation}) => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState(0);
  const [filePath, setFilePath] = useState([]);
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [rating, setRating] = useState('');
  const [size, setSize] = useState('');
  const [brand, setBrand] = useState('');
  const [quantity, setQuantity] = useState('');
  const [color, setColor] = useState('');
  return (
    <ScrollView>
      <View>
        <CustomHeader
          leftIcon="arrow-left"
          leftIconRoute={() => navigation.goBack()}
        />
        <HeadlineText condition="Sign Up" />
      </View>
    </ScrollView>
  );
};

export default AddProduct;
