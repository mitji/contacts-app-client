//	services
//AuthProvider.js

import React from 'react';
import authService from './auth-service'; // IMPORT functions for axios requests to API
const { Consumer, Provider } = React.createContext();

// HOC to create Consumer
const withAuth = WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <Consumer>
          {/* <Consumer> component provides callback which receives Providers "value" object */}
          {/* (value) => { <WrappedComponent />}  */}
          {({ login, signup, user, logout, isLoggedin, isLoading, isUserInvalid }) => {
            return (
              <WrappedComponent
                login={login}
                signup={signup}
                user={user}
                logout={logout}
                isLoggedin={isLoggedin}
                isLoading={isLoading}
                isUserInvalid={isUserInvalid}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

// Provider --> provides my hoc with functions
class AuthProvider extends React.Component {
  state = { 
    isLoggedin: false, 
    user: null,
    rememberMe: false, 
    isLoading: true,
    isUserInvalid: false,
  };

  componentDidMount() {
    authService.private()
      .then(user => {
        this.setState({ isLoggedin: true, user: user, isLoading: false, isUserInvalid: false})
      })
      .catch(err =>
        this.setState({ isLoggedin: false, user: null, isLoading: false, isUserInvalid: false}),
      );
  }

  signup = user => {
    const { email, password, rememberMe } = user;

    authService.signup({ email, password, rememberMe})
      .then(user => this.setState({ isLoggedin: true, user , rememberMe, isUserInvalid: false}))
      .catch(err => console.log(err));
  };

  login = (user) => {
    const { email, password, rememberMe } = user;

    authService.login({ email, password, rememberMe})
      .then(user => this.setState({ isLoggedin: true, user , rememberMe, isUserInvalid: false}))
      .catch(err => {
        this.setState({isUserInvalid: true})
        console.log(err)
      });
  };

  logout = () => {
    if(this.state.rememberMe) {
      authService.logout()
        .then(() => this.setState({ isLoggedin: false, user: null, isUserInvalid: false}))
        .catch(err => console.log(err));
    } else {
      this.setState({isLoggedin: false, user: null, isUserInvalid: false})
    }
  };

  render() {
    const { isLoading, isLoggedin, user, isUserInvalid} = this.state;
    const { login, logout, signup } = this;

    return (
      <Provider value={{ isLoading, isLoggedin, user, isUserInvalid, login, logout, signup}}>
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer, withAuth };

export default AuthProvider;