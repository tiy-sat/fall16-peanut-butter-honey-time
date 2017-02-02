import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <header>
        <h1>Peanut Butter Honey Sammich World Wide Interactive Animated Database of Power</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
    )
  }
})
