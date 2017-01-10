import React from 'react'
import { Link } from 'react-router'

const Main = React.createClass({
  render() {
    return (<div>
      <Link to="/">HOME</Link>
      {React.cloneElement(this.props.children, this.props)}
    </div>)
  }
})

export default Main
