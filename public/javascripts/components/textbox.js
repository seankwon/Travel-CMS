import ReactDOM from 'react-dom';
import React, { Component } from 'react';

export default class TextBox extends Component {
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
