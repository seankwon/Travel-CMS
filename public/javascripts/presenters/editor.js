import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SectionList from './sectionList';


class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {sections: this.props.sections}
  }

  addSection(text) {
    let newSection = {text: text, id: Math.random()}
    this.setState((prevState, props) => ({
      sections: [...this.prevState.sections, newSection]
    }));
  }

  render() {
    return <div>
      <input type='text' className='add-section-input' />
      <SectionList sections={this.state.sections}/>
    </div>
  }
}

export default Editor
