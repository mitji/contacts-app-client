import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from './../services/AuthProvider';
class Signup extends Component {
  state = {
    email: '',
    password: ''
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.signup({ email, password });
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
        <h2>Signup</h2>
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

          <input type="submit" value="Signup"/>
        </form>

        <p>Already a user?</p>
        <Link to='/login'>Login</Link>
      </div>
    )
  }
}

export default withAuth(Signup);