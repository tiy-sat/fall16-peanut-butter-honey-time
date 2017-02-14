import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getDefaultProps() {
    return {
      user: { authed: false }
    }
  },
  render() {
    return (
      <header>
        <div>
          <img ref="userImage" className="nav__currentUserImage" src={this.props.user.picture} />

          <button className="nav__signIn"
              onClick={this.props.signUserIn}
              data-js="nav__signIn"> Log In </button>
          <button className="nav__signOut--hide"
              onClick={this.props.signUserOut}
              data-js="nav__signOut"> Log Out</button>

        </div>
        <h1>Peanut Butter Honey Sammich World Wide Interactive Animated Database of Power</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/detail">Detail</Link>
        </nav>
      </header>
    )
  }
})
