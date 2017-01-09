import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Section extends Component {
  render() {
    return <div key={this.props.id} className="section">
      {this.props.text}
    </div>
  }
}

Section.displayName = 'Section'

export default Section
