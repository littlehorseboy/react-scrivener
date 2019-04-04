import { LOGIN } from '../actions/login';

const initState = {
  isAuthenticated: false,
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
