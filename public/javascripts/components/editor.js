import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import dragula from 'react-dragula';
import { dispatch } from 'redux';
import { addSection, updateSection } from '../actions/editorActions';

class TextBox extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let pTag = ReactDOM.findDOMNode(this).querySelector('.textbox-content');
    const { index, dispatch } = this.props;
  }

  render() {
    return (
      <div className="textbox">
        <input type="text" className="textbox-content" value={this.props.children}></input>
      </div>
    );
  }
}

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.addSection = this.addSection.bind(this);
  }

  componentDidMount() {
    let container = ReactDOM.findDOMNode(this);
    const { dispatch } = this.props;
    dispatch(addSection(2));

    dragula([container]).on('drop', (el) => {
      console.log('Target to call update');
    });
  }

  addSection() {
    const { dispatch, sections } = this.props;
    dispatch(addSection(2));
  }

  sectionsDontExist() {
    return !this.props.sections || this.props.sections.length < 1;
  }

  render() {
    let button = (
      <button id="addSection" className="btn" onClick={this.addSection}>
        Add Section
      </button>
    );

    if (this.sectionsDontExist()) {
      return <div className="editor-container"><TextBox key={0} index={0} />{button}</div>
    }

    return (
      <div className="editor-container">
        {this.props.sections.map((sectionText, idx) =>
          <TextBox index={idx} key={idx}>{sectionText}</TextBox>
        )}
        {button}
      </div>
    );
  }
}
