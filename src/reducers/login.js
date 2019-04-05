import { LOGIN } from '../actions/login';

const initState = {
  isAuthenticated: false,
  userInfo: {},
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        userInfo: action.payload.userInfo,
      };
    default:
      return state;
  }
};

export default loginReducer;
