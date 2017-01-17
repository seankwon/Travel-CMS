export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';

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

export function fetchArticles(user_id) {
  return (dispatch) => {
    dispatch(requestArticles(user_id));

    return fetch('users/journeytest')
      .then(response => response.json())
      .then(json =>
        dispatch(receiveArticles(user_id, json))
           );
  };
};
