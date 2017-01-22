import {REQUEST_ARTICLES, RECEIVE_ARTICLES, CHANGE_CURRENT_ARTICLE} from '../actions/articleActions';

function articles(state = {
  articles: [],
  isFetching: false,
  activeArticleId: undefined
}, action) {
  switch(action.type) {
    case REQUEST_ARTICLES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_ARTICLES:
      return Object.assign({}, state, {
        isFetching: false,
        articles: action.articles
      });
    case CHANGE_CURRENT_ARTICLE:
      return Object.assign({}, state, {
        activeArticleId: action.articleId
      });
    default:
      return state;
  }
}

export default articles;
