import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Section from './section'

class SectionList extends Component {
  constructor(props) {
    super(props)
    let tempSections = props.section.map(el => {
      <Section key={el.id} text={el.text} />
    })
    this.state = {sections: tempSections};
  }

  addSection(text) {
    let newSection = (<Section key={undefined} text={text} />)
    this.setState((prevState, props) => ({
      sections: [...this.prevState.sections, newSection]
    }));
  }

  render() {
    return (<div className="sectionList">
      {this.state.sections}
    </div>)
  }
}

export default SectionList;
