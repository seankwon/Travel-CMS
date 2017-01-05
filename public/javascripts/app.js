import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import sectionList from './presenters/sectionList';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>hello world</div>
  }
}

ReactDOM.render(
  <App text="Lorem Ipsum Delorum"/>,
  document.getElementById('journey')
)
