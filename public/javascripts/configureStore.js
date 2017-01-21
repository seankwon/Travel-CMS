import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import ArticlesReducer from './reducers/articles';
import editor from './reducers/Editor';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

const loggerMiddleware = createLogger();
const reducers = combineReducers({
  editor,
  ArticlesReducer,
  routing: routerReducer
});

export default function configureStore(preloadedState) {
  return createStore(
    reducers,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}
