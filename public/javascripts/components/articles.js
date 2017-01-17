import React, { Component } from 'react';
import {requestArticles, fetchArticles} from '../actions/articleActions'

class Article extends Component {
  render() {
    return (
      <div>{this.props.text}</div>
    )
  }
}

export class ArticleList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchArticles(2));
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
        {this.props.articles.map((article) =>
          <Article key={article.id} text={article.title} />
        )}
      </div>
    );
  }
}
