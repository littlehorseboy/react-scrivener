import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { createLogger } from 'redux-logger';
import loginReducer from './login';
import scrivenerReducer from './scrivener';
import fileReducer from './file';
import { fileEpic } from '../actions/file';

const rootReducer = combineReducers({
  loginReducer,
  scrivenerReducer,
  fileReducer,
});

const rootEpic = combineEpics(fileEpic);

const epicMiddleware = createEpicMiddleware();

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    epicMiddleware,
    loggerMiddleware,
  ),
);

epicMiddleware.run(rootEpic);

export default store;
