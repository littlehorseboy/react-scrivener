import { FETCH_FILE_FULFILLED } from '../actions/file';

const initState = {
  file: {},
};

const fileReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_FILE_FULFILLED:
      return {
        ...state,
        file: action.payload,
      };
    default:
      return state;
  }
};

export default fileReducer;
