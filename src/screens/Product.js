import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, Text} from 'react-native';

import DetailProduct from '../components/DetailProduct/DetailProduct';

const Product = ({route}) => {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState({});
  const {Itemid} = route.params;
  const url = 'http://192.168.8.100:3000/product/' + Itemid;

  useEffect(() => {
    axios
      .get(url)
      .then(({data}) => {
        let splitter = data.image.split(',');
        setImage(splitter.map((e) => e.replace('localhost', '192.168.8.100')));
        setProduct(data);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <View>
      <Text>Produk detail</Text>
      <DetailProduct
        name={product.product_name}
        desc={product.product_description}
        img={image[0]}
        brand={product.product_brand}
        price={product.product_price}
      />
    </View>
  );
};

export default Product;
