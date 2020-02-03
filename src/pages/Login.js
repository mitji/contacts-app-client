import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from './../services/AuthProvider';

class Login extends Component {
  state = { 
    email: '', 
    password: '' 
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login({ email, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1>Contacts app</h1>
        <h2>Login</h2>
        <form onSubmit={this.handleFormSubmit}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <input type="submit" value="Login" />
        </form>
        <p>Not a user?</p>
        <Link to='/signup'>Signup</Link>
      </div>
    );
  }
}

export default withAuth(Login);