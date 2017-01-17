import {ArticleList} from '../components/articles';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  const {articles, isFetching} = state;
  return {
    isFetching,
    articles
  }
};

export default connect(mapStateToProps)(ArticleList);
