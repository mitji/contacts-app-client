import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from './../services/AuthProvider';

class Signup extends Component {
  state = {
    email: '',
    password: '',
    rememberMe: true
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password, rememberMe } = this.state;
    this.props.signup({ email, password, rememberMe });
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