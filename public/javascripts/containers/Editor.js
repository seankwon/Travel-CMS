import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import dragula from 'react-dragula';
import {requestArticles, fetchArticles} from '../actions/articleActions';

function invalidTarget(el, handle) {
  return el.className === 'textbox-content';
}

class TextBox extends Component {
  render() {
    return (
      <div className="textbox">
        <p className="textbox-content" contentEditable="true">{this.props.children}</p>
      </div>
    );
  }
}

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = Object.assign({}, props);
  }

  componentDidMount() {
    let container = ReactDOM.findDOMNode(this);
    dragula([container]).on('drop', (el) => {
      console.log('Target to call update');
    });
  }

  handleChange(e) {
    this.setState({value: e.value});
  }

  render() {
    return (
      <div className="editor-container">
        <TextBox>Hi</TextBox>
        <TextBox>Hello</TextBox>
      </div>
    );
    //return <input onChange={this.handleChange} type="text"/>;
  }
}
