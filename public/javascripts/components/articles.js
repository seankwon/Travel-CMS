import React, { Component } from 'react';
import {requestArticles, fetchArticlesIfNeeded, changeCurrentArticle} from '../actions/articleActions'
import {Link} from 'react-router'

export class Article extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchArticlesIfNeeded(2));
    dispatch(changeCurrentArticle(this.props.params.id));
  }

  render() {
    if (!this.props || !this.props.article) {
      return <p>Nope</p>
    }
    return (
      <div>{this.props.article.content}</div>
    )
  }
}

export class ArticleList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchArticlesIfNeeded(2));
  }

  articlesExist() {
    const {articles} = this.props;
    return articles && articles.length > 0;
  }

  render() {
    if (!this.articlesExist()) {
      return <p>No Articles To Be Found</p>;
    }

    return (
      <div>
        <h1>Articles</h1>
        {this.props.articles.map((article) =>
          <div className="article-link-container">
            <Link key={article.id} to={`/app/article/${article.id}`}>{article.title}</Link>
          </div>
        )}
      </div>
    );
  }
}
