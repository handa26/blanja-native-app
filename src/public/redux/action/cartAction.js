import * as actionTypes from '../actionTypes';

export const addToCart = (itemId, image, price, productName, sellerId) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemId,
      image: image,
      price: price,
      productName: productName,
      seller_id: sellerId,
      pick: true,
    },
  };
};

export const plusQty = (id) => {
  return {
    type: actionTypes.PLUS_QTY,
    payload: {
      id,
    },
  };
};

export const minQty = (id) => {
  return {
    type: actionTypes.MIN_QTY,
    payload: {
      id,
    },
  };
};

export const pickCart = (id) => {
  return {
    type: actionTypes.PICK_CART,
    payload: {
      id,
    },
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
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
