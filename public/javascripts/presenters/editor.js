import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SectionList from './sectionList';

class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {sections: this.props.sections, value: ''}

    this.updateValue = this.updateValue.bind(this)
    this.addSection = this.addSection.bind(this)
  }

  updateValue(event) {
    this.setState({sections: this.state.sections, value: event.target.value});
  }

  addSection() {
    let newSection = {text: this.state.value, id: Math.random()}
    this.setState({sections: [...this.state.sections, newSection], value: this.state.value});
  }

  render() {
    return <div>
      <input onClick={this.addSection} className='submit-section' type='submit'  />
      <input value={this.state.value} onChange={this.updateValue} type='text' className='add-section-input' />
      <SectionList sections={this.state.sections}/>
    </div>
  }
}

Editor.displayName = 'Editor'

export default Editor
