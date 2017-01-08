import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Section from './section'

class SectionList extends Component {
  constructor(props) {
    super(props)
    let tempSections = props.sections.map(el => {
      return <Section key={el.id} text={el.text} />
    })
    console.log(tempSections);
    this.state = {sections: tempSections};
  }

  render() {
    return (<div className="sectionList">
      {this.state.sections}
    </div>)
  }
}
SectionList.displayName = 'SectionList'

export default SectionList;
