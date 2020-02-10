import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from './../services/AuthProvider';

import './../styles/auth.scss';

class Login extends Component {
  state = { 
    email: '', 
    password: '',
    rememberMe: true
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password, rememberMe} = this.state;
    this.props.login({ email, password, rememberMe});
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  rememberMehandler = () => {
    const remember = this.state.rememberMe;
    this.setState({rememberMe: !remember});
  }

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

            <div className="inline-wrapper">
              <input type="checkbox" 
                     checked={this.state.rememberMe}
                     onChange={this.rememberMehandler}/>
              <span>Remember me</span>
            </div>

            { this.props.isUserInvalid 
              ? <p className="error-msg"><span>&#9888;</span> Introduce a valid email and password</p>
              : null
            }
            <input type="submit" value="Login" className="auth__btn"/>
          </form>
          <div className="inline-wrapper">
            <p>Not a user?</p>
            <Link to='/signup' className="link">Signup</Link>
          </div>
        </section>
      </div>
    );
  }
}

export default withAuth(Login);