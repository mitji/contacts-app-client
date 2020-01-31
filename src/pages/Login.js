import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  render() {
    return (
      <div>
        <h2>Login page</h2>
      </div>
    )
  }
}

export default Login;