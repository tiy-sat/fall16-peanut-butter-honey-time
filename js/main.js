import React from 'react'
import ReactFire from 'reactfire'

export default React.createClass({
  componentDidMount() {
    this.setState({provider: new firebase.auth.GoogleAuthProvider()});

    firebase.auth().onAuthStateChanged((user) => {
      if (user) { // Signed in successfully
        var signOutButton = document.querySelector("[data-js='nav__signOut']")
        if (signOutButton.className == "nav__signOut--hide") {
          signOutButton.className = "nav__signOut";
        }
        var currentUser = {};
        var today = new Date();

        currentUser["/users/" + user.uid] = {
          email: user.email,
          name: user.displayName,
          picture: user.photoURL,
          lastLogin: today
        }

        firebase.database().ref().update(currentUser)

        // This sets up a callback once firebase reports that /users/{user.uid} has a value
        firebase.database().ref("/users/" + user.uid).once("value").then((snapshot) => {
          var snapshotReturn = snapshot.val()
          // FIXME: Understand why we are using snapshotReturn.email but user.displayName
          this.setState({
            currentName: snapshotReturn.email,
            name: user.displayName,
            picture: user.photoURL,
            lastLogin: snapshotReturn.lastLogin
          });
        });
    }
    else { // signed out or something went wrong
      var signOutButton = document.querySelector("[data-js='nav__signOut']")
      if(signOutButton.className == "nav__signOut"){
        signOutButton.className = "nav__signOut--hide"
      }
    }
  })
  },
  getInitialState() {
    return {
      provider: () => {},
      currentName: "Not logged in",
      name: "",
      picture: ""
    }
  },
  signUserIn() {
    firebase.auth().signInWithRedirect(this.state.provider);
    firebase.auth().getRedirectResult().then((result) => {
      if(result.credential) {
        var token = result.credential.accessToken;
      }
      var user = result.user;
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log("ERROR authenticating with firebase: " + errorMessage);
      //FIXME: Better logging/error handling
    });
  },
  signUserOut() {
    firebase.auth().signOut().then(() => {
      this.setState({
        currentName: "Not logged in",
        picture: "",
        name: ""
      })
    })
  },
  render() {
    return(
      <section>
        <h2>Welcome to my peanut butter honey sammich database</h2>
        <p>This application will let you search for, review, and add peanut butter honey sammich recipes.</p>
        <p>{this.state.currentName}</p>
        <img className="nav__currentUserImage" src={this.state.picture} />

      <div>
        <button className="nav__signIn"
            onClick={this.signUserIn}
            data-js="nav__signIn"> Log In </button>
        <button className="nav__signOut--hide"
            onClick={this.signUserOut}
            data-js="nav__signOut"> Log Out</button>

      </div>
      </section>
    )
  }
})
