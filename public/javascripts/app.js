import 'babel-polyfill';
import 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main'
import Article from './components/Article'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Article}></IndexRoute>
      //<Route path="/article/:article_id"></Route>
    </Route>
  </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
)
