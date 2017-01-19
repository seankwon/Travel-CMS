import {REQUEST_ARTICLES, RECEIVE_ARTICLES} from '../actions/articleActions';

function ArticlesReducer(state = {
  articles: [],
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
        articles: action.articles,
      });
    default:
      return state;
  }
}

export default ArticlesReducer;
