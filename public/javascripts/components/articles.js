import React, { Component } from 'react';
import requestArticles from '../actions/articleActions'

class Article extends Component {
  render() {
    return (
      <div>{this.props.text}</div>
    )
  }
}

//Assuming that state.articles is a json obj
class ArticleList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(requestArticles(2))
  }

  render() {
    return (
			this.props.articles.map((article) =>
				(<Article text={article.text} />)
			)
		)
  }
}

//const mapStateToProps

export default ArticleList
