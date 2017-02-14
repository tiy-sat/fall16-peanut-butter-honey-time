import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getDefaultProps() {
    return {
      user: { authed: false }
    }
  },
  render() {

    // BAD:      var signOutButton = document.querySelector("[data-js='nav__signOut']")

    // if(signOutButton.className == "nav__signOut"){
    //   signOutButton.className = "nav__signOut--hide"
    // }

    // var signoutButtonClass = "nav__signOut--hide"
    // if (this.props.user.authed) {
    //   signoutButtonClass = "nav__signOut"
    // }
    //  Last four lines are exactly the same as:
    var signoutButtonClass = this.props.user.authed ? "nav__signOut" : "nav__signout--hide"
    return (
      <header>
        <div>
          <img ref="userImage" className="nav__currentUserImage" src={this.props.user.picture} />

          <button ref="userLogInButton"
            className="nav__signIn"
            onClick={this.props.signUserIn}
            data-js="nav__signIn"> Log In </button>
          <button ref="userLogOutButton"
            className={signoutButtonClass}
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
