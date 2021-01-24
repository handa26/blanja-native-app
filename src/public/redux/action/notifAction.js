import * as actionTypes from '../actionTypes';

export const addNotification = (data) => {
  return {
    type: actionTypes.ADD_NOTIF,
    payload: {
      notif: data,
    },
  };
};
