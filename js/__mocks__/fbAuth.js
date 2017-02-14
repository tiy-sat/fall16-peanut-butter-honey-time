const provider = {}

export function fbSignInWithRedirect() {
  console.log("FIXME: In mocked fbSignInWithRedirect")
}

export function fbSetupSignoutCallback(cb) {
  return cb()
}

export function fbOnAuthStateChanged(cb) {
  return cb()
}

export function fbUpdateUser(user) {
  //FIXME: Do we need to mock out database?
}

export function fbWhenUserUpdated(uid, cb) {
  cb()
}
