import * as actionTypes from '../actionTypes';

export const addToCart = (itemId, image, price, productName) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemId,
      image: image,
      price: price,
      productName: productName,
    },
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};
