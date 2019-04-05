export const LOGIN = 'LOGIN';

export const login = userInfo => ({
  type: LOGIN,
  payload: {
    userInfo,
  },
});
