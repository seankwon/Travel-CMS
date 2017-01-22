import React, { Component } from 'react';

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav id="main-menu"></nav>
        <section id="main-content">
          <div className="wrapper">
          {React.cloneElement(this.props.children, { ...this.props, key: undefined, ref: undefined })}
          </div>
        </section>
      </div>
    );
  }
}
/*
<nav id="main-menu">
</nav>
<section id="main-content">
  <div id="root">
  </div>
  </section>
  */
