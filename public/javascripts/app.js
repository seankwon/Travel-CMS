import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/*
const Section = ({}) => (
  <div className='paragraph-container'>
    <p>{this.props.text}</p>
  </div>
  );
  */

class Paragraph extends Component {
  render() {
    return <div className="paragraph-container">
      <p>{this.props.text}</p>
      {this.children}
    </div>
  }
}

ReactDOM.render(
  <Paragraph text="Lorem Ipsum Delorum"/>,
  document.getElementById('journey')
)
