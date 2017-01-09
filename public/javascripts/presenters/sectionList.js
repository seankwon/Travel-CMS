import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Section from './section'

class SectionList extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (<div className="sectionList">
      {this.props.sections.map(el => {
        return <Section key={el.id} text={el.text} />
      })}
    </div>)
  }
}
SectionList.displayName = 'SectionList'

export default SectionList;
