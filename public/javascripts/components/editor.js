import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import dragula from 'react-dragula';
import { dispatch } from 'redux';
import { addSection, updateSection, saveSections } from '../actions/editorActions';

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.children}

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.value});
  }

  render() {
    return (
      <div className="textbox">
        <input onChange={this.handleChange} type="text" className="textbox-content" value={this.state.value} />
      </div>
    );
  }
}

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.addSection = this.addSection.bind(this);
    this.saveSections = this.saveSections.bind(this);
  }

  componentDidMount() {
    let container = ReactDOM.findDOMNode(this);
    //Add initial section
    const { dispatch } = this.props;
    dispatch(addSection(2));

    dragula([container]).on('drop', (el) => {
      let sections = this.getSectionTexts();
      this.props.dispatch(saveSections(sections, 2));
    });
  }

  getSectionTexts() {
    let sectionTexts = [].slice.call(ReactDOM.findDOMNode(this).getElementsByClassName('textbox-content'));
    return sectionTexts.map((section) => section.value);
  }

  saveSections() {
    let sections = this.getSectionTexts();
    this.props.dispatch(saveSections(sections, 2));
  }

  addSection() {
    const { dispatch, sections } = this.props;
    dispatch(addSection(2));
  }

  sectionsDontExist() {
    return !this.props.sections || this.props.sections.length < 1;
  }

  render() {
    let addButton = (
      <button id="addSection" className="btn" onClick={this.addSection}>
        Add Section
      </button>
    );
    let saveButton = (
      <button id="saveSections" onClick={this.saveSections} className="btn">
      Save
      </button>
    );

    if (this.sectionsDontExist()) {
      return <div className="editor-container"><TextBox key={0} index={0} />{addButton}{saveButton}</div>
    }

    return (
      <div className="editor-container">
        {this.props.sections.map((sectionText, idx) =>
          <TextBox index={idx} key={idx}>{sectionText}</TextBox>
        )}
        {addButton}
        {saveButton}
      </div>
    );
  }
}
