import React, { Component } from 'react';
import { createStore, applyMiddleware, Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import VisibleArticleList from './containers/VisibleArticleList';
//import {ArticleList} from './components/articles';
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}><VisibleArticleList /></Provider>,
  document.getElementById('root')
);

//console.log(store.getState());
