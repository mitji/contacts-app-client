import React, { Component } from 'react';
import { withAuth } from './../services/AuthProvider';

class Contacts extends Component {
  render() {
    return (
      <h1>Contacts page</h1>
    )
  }
}

export default withAuth(Contacts);