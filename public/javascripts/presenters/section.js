import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Section extends Component {
  render() {
    return <div key={this.props.id} className="section">
      {this.props.text}
    </div>
  }
}

export default Section
