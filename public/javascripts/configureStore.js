import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import articlesReducer from './reducers/articles'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    articlesReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}
