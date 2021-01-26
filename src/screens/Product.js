import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../public/redux/action/cartAction';
import axios from 'axios';
import {View, Text, Alert} from 'react-native';
import {Spinner} from 'native-base';
import {API_URL_DEVELOPMENT, IP_DEVELOPMENT} from '@env';

import DetailProduct from '../components/DetailProduct/DetailProduct';

const Product = ({route, navigation, addToCart}) => {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState({});
  const {Itemid} = route.params;
  const url = `${API_URL_DEVELOPMENT}product/` + Itemid;

  useEffect(() => {
    axios
      .get(url)
      .then(({data}) => {
        let splitter = data.image.split(',');
        setImage(splitter.map((e) => e.replace('localhost', IP_DEVELOPMENT)));
        setProduct(data);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <View>
      {product ? (
        <DetailProduct
          name={product.product_name}
          desc={product.product_description}
          img={image[0]}
          firstImg={image[1]}
          secImg={image[2]}
          brand={product.product_brand}
          price={product.product_price}
          navigation={navigation}
          addToCart={() => {
            addToCart(
              product.id,
              image[0],
              product.product_price,
              product.product_name,
            );
            console.log('Added to cart');
            Alert.alert(
              'Add to cart',
              `${product.product_name} added to cart`,
              [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              {cancelable: false},
            );
          }}
        />
      ) : (
        <Spinner />
      )}
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id, image, price, productName) =>
      dispatch(addToCart(id, image, price, productName)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
