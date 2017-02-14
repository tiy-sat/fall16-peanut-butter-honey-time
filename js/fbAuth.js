
const provider = new firebase.auth.GoogleAuthProvider()

export function fbSignInWithRedirect() {
  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then((result) => {
    if(result.credential) {
      var token = result.credential.accessToken;
    }
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log("ERROR authenticating with firebase: " + errorMessage);
    //FIXME: Better logging/error handling
  });

}

export function fbSetupSignoutCallback(cb) {
  return firebase.auth().signOut().then(cb)
}

export function fbOnAuthStateChanged(cb) {
  return firebase.auth().onAuthStateChanged(cb)
}

export function fbUpdateUser(user) {
  firebase.database().ref().update(user)
}

export function fbWhenUserUpdated(uid, cb) {
  firebase.database().ref("/users/" + uid).once("value").then(cb)
}
