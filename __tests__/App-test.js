import React from 'react'
import TestUtils from 'react-addons-test-utils'
import App from '../js/App'

jest.mock('../js/fbAuth')

describe("App", ()=>{

  let appComponent = {}

  beforeEach(() => {
    appComponent = TestUtils.renderIntoDocument(<App/>)
  })

  it("Should work (FIXME)", () => {
    expect(appComponent).toBeDefined()
  })

})
