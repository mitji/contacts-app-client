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
      <div className="auth">
        <section className="auth__company">
          <img src="./logo.png" alt=""/>
        </section>
        <section className="auth__form">
          <h1>Contacts app</h1>
          <form onSubmit={this.handleFormSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Email"
              required
            />

            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Password"
              required
            />

            <input type="submit" value="Signup" className="auth__btn"/>
          </form>
          <div className="inline-wrapper">
            <p>Already a user?</p>
            <Link to='/login' className="link">Login</Link>
          </div>
        </section>
      </div>
    )
  }
}

export default withAuth(Signup);