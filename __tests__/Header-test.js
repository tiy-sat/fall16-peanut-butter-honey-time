import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Header from '../js/Header'

describe("Header", ()=>{

  let headerComponent = {}
  let user = { authed: false}

  beforeEach(() => {
    user = { authed: false }

    var signUserInMock = jest.fn(e => {
      user = {
        authed: true,
        name: "Nibor Rumplestiltskin III",
        email: "nibor@example.com",
        picture: "https://example.com/nibor.png",
        lastLogin: new Date()
      }
    })

    var signUserOutMock = jest.fn(e => {
      user = { authed: false }
    })

    headerComponent = TestUtils.renderIntoDocument(<Header user={user}
      signUserIn={signUserInMock}
      signUserOut={signUserOutMock}/>)
  })

  it("Should have an empty user image", () => {
    let imgElement = headerComponent.refs.userImage

    expect(imgElement).toBeDefined()
    expect(imgElement.src).toEqual("")
  })

  it("Should let a user sign in", () => {
    expect(user.authed).toBeFalsy()

    // Not the best way; inspect the DOM
    // var domButton = TestUtils.findRenderedDOMComponentWithClass(headerComponent,
    // "nav__signIn");
    // console.log(domButton)

    var logInButton = headerComponent.refs.userLogInButton
    TestUtils.Simulate.click(logInButton)

    // A better (or at least more "react-ey" way is to use refs)

    // Make this work:
    expect(user.authed).toBeTruthy()
    expect(user.picture).toEqual("https://example.com/nibor.png")
  })

  it("Should let a user sign out", () => {
    expect(user.authed).toBeFalsy()

    let signInButton = headerComponent.refs.userLogInButton
    TestUtils.Simulate.click(signInButton)

    expect(user.authed).toBeTruthy()

    let signOutButton = headerComponent.refs.userLogOutButton
    TestUtils.Simulate.click(signOutButton)

    expect(user.authed).toBeFalsy()
  })

})
