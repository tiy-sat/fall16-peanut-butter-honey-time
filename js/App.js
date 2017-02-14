import React from 'react'
import { Link } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import { fbSignInWithRedirect, fbSetupSignoutCallback, fbOnAuthStateChanged,
  fbUpdateUser, fbWhenUserUpdated} from './fbAuth'

export default React.createClass({
  getInitialState() {
    return {
      provider: () => {},
      user: {
        authed: false,
        name: '',
        email: '',
        picture: '',
        lastLogin: undefined
      },
      //
      // currentName: "Not logged in",
      // name: "",
      // picture: ""
    }
  },
  componentDidMount() {
    fbOnAuthStateChanged((authUser) => {
      if (authUser) { // Signed in successfully
        var signOutButton = document.querySelector("[data-js='nav__signOut']")
        if (signOutButton.className == "nav__signOut--hide") {
          signOutButton.className = "nav__signOut";
        }
        var currentUser = {};
        var today = new Date();

        currentUser["/users/" + authUser.uid] = {
          name: authUser.displayName,
          email: authUser.email,
          picture: authUser.photoURL,
          lastLogin: today
        }

        fbUpdateUser(currentUser)

        fbWhenUserUpdated(authUser.uid, (snapshot) => {
        // This sets up a callback once firebase reports that /users/{user.uid} has a value
          var snapshotReturn = snapshot.val()
          this.setState({
            user: {
              authed: true,
              name: snapshotReturn.name,
              email: snapshotReturn.email,
              picture: snapshotReturn.picture,
              lastLogin: snapshotReturn.lastLogin
            }
          });
        });
    }
    else { // signed out or something went wrong
      console.log("LOGGED OUT")
    }
  })

  },
  signUserIn() {
    fbSignInWithRedirect()
  },
  signUserOut() {
    fbSetupSignoutCallback(() => {
      //FIXME: Don't repeat myself from getInitialState()
      this.setState({
        user: {
          authed: false,
          name: '',
          email: '',
          picture: '',
          lastLogin: undefined
        }
      })
    })
  },
  render() {
    return (
      <section>
        <Header user={this.state.user}
                signUserIn={this.signUserIn}
                signUserOut={this.signUserOut}/>
        {this.props.children && React.cloneElement(this.props.children,
                  { user: this.state.user })}
        <Footer />
      </section>
    )
  }
})
