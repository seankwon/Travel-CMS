import {ArticleList} from '../components/articles';
import {connect} from 'react-redux';

const getArticlesData = (state) => {
  return state.articles;
}

function mapStateToProps(state) {
  const {articles, isFetching} = getArticlesData(state);
  return {
    isFetching,
    articles
  }
};

export default connect(mapStateToProps)(ArticleList);
