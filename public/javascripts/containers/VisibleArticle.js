import {Article} from '../components/articles';
import {connect} from 'react-redux';

const getArticle = (state) => {
  let { articles, activeArticleId } = state.articles;
  return articles.find((element) => element.id === (activeArticleId + ''));
}

function mapStateToProps(state) {
  let article = getArticle(state) || undefined;
  return {
    article
  }
};

export default connect(mapStateToProps)(Article);
