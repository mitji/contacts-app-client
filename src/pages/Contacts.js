import React, { Component } from 'react';
import { withAuth } from './../services/AuthProvider';

class Contacts extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Contacts page</h1>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    )
  }
}

export default withAuth(Contacts);