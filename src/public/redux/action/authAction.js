import * as actionTypes from '../actionTypes';

export const login = (token, id, level, name, email) => {
  return {
    type: actionTypes.LOGIN,
    payload: {
      token: token,
      id: id,
      level: level,
      name: name,
      email: email,
    },
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};
