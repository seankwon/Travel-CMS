export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const CHANGE_CURRENT_ARTICLE = 'CHANGE_CURRENT_ARTICLE';

export const changeCurrentArticle = (articleId) => ({
  type: CHANGE_CURRENT_ARTICLE,
  articleId
});

export const requestArticles = (user_id) => ({
  type: REQUEST_ARTICLES,
  user_id
});

export const receiveArticles = (user_id, json) => ({
  type: RECEIVE_ARTICLES,
  user_id,
  articles: json.data.articles,
  receivedAt: Date.now()
});

export const fetchArticlesIfNeeded = (user_id) => {
  let shouldFetchArticles = (state) => {
    const { articles } = state.ArticlesReducer;
    return (articles && articles.length < 1);
  }

  return (dispatch, getState) => {
    if (shouldFetchArticles(getState())) {
      dispatch(fetchArticles(user_id));
    }
  }
};

export function fetchArticles(user_id) {
  return (dispatch) => {
    dispatch(requestArticles(user_id));

    return fetch('/users/journeytest')
      .then(response => response.json())
      .then(json =>
        dispatch(receiveArticles(user_id, json))
      );
  };
};
