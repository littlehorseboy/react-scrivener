import { ADD_SCRIVENER } from '../actions/scrivener';

const initState = {
  editor: {},
};

const scrivenerReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_SCRIVENER:
      return {
        ...state,
        editor: action.payload,
      };
    default:
      return state;
  }
};

export default scrivenerReducer;
