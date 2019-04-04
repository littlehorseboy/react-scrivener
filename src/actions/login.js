export const LOGIN = 'LOGIN';

export const login = isAuthenticated => ({
  type: LOGIN,
  payload: isAuthenticated,
});
