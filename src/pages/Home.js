import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { withAuth } from '../services/AuthProvider';

class Home extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
        {isLoggedin ? (
          <Redirect to="/contacts" />
        ) : (
          <div>
            <Link to="/login">
              {' '}
              <button>Login</button>{' '}
            </Link>
            <br />
            <Link to="/signup">
              {' '}
              <button >Signup</button>{' '}
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAuth(Home);