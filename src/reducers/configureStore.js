import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import loginReducer from './login';
import scrivenerReducer from './scrivener';

const rootReducer = combineReducers({
  loginReducer,
  scrivenerReducer,
});

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware),
);

export default store;
