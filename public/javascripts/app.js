import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Paragraph extends Component {
  render() {
    return <div className="paragraph-container">
      <p>{this.props.text}</p>
    </div>
  }
}

ReactDOM.render(
  <Paragraph text="Lorem Ipsum Delorum"/>,
  document.getElementById('journey')
)
