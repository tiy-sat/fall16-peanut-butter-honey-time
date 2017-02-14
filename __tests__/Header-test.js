import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Header from '../js/Header'

describe("Header", ()=>{

  let headerComponent = {}

  beforeEach(() => {
    headerComponent = TestUtils.renderIntoDocument(<Header />)
  })

  it("Should have an empty user image", () => {
    let imgElement = headerComponent.refs.userImage

    expect(imgElement).toBeDefined()
    expect(imgElement.src).toEqual("")
  })
})
