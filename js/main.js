import React from 'react'
import ReactFire from 'reactfire'

export default React.createClass({
  getDefaultProps() {
    return {
      user: { authed: false }
    }
  },
  render() {
    return(
      <section>
        <h2>Welcome to my peanut butter honey sammich database</h2>
        <p>This application will let you search for, review, and add peanut butter honey sammich recipes.</p>
        <p>{this.props.user.name}</p>

      </section>
    )
  }
})
