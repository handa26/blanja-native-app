import React, {useState, useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {addToCart} from '../../public/redux/action/cartAction';
import axios from 'axios';
import {View, ToastAndroid} from 'react-native';
import {Spinner} from 'native-base';
import {API_URL_DEVELOPMENT} from '@env';

import DetailProduct from '../../components/DetailProduct/DetailProduct';

const Product = ({route, navigation, addToCart}) => {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState({});
  const {Itemid} = route.params;
  const url = `${API_URL_DEVELOPMENT}/product/` + Itemid;
  const id = useSelector((state) => state.auth.id);

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Added to bag!',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  useEffect(() => {
    axios
      .get(url)
      .then(({data}) => {
        let splitter = data.image.split(',');
        setImage(splitter.map((e) => API_URL_DEVELOPMENT + e));
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
          productId={product.user_id}
          roomId={`S${product.user_id}B${id}`}
          addToCart={() => {
            addToCart(
              product.id,
              image[0],
              product.product_price,
              product.product_name,
              product.user_id,
            );
            showToastWithGravityAndOffset();
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
    addToCart: (id, image, price, productName, sellerId) =>
      dispatch(addToCart(id, image, price, productName, sellerId)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
