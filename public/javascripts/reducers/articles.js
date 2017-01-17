import {REQUEST_ARTICLES, RECEIVE_ARTICLES} from '../actions/articleActions';

function articles(state = {articles: [],
  isFetching: false
}, action) {

  switch(action.type) {
    case REQUEST_ARTICLES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_ARTICLES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.articles,
        last_Updated: action.receivedAt
      });
  }

  return state;
}

var articlesReducer = articles;
export default articlesReducer;
