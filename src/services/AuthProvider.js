import React from 'react';
import authService from './auth-service';
const { Consumer, Provider } = React.createContext();

// HOC to create Consumer
const withAuth = WrappedComponent => {
  return class extends React.Component {
    render() {
      return(
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
      )
    }
  }
}

// Provider --> provides the hoc with functions
class AuthProvider extends React.Component {
  state = {
    user: null,
    isLoggedin: false,
    isLoading: true,
    isUserInvalid: false
  }

  componentDidMount() {
    
  }

  signup = user => {
    const { email, password } = user;

    authService.signup({ email, password })
      .then( (user) => this.setState({user, isLoggedin: true}))
      .catch( (err) => {
        this.setState({isLoggedin: false});
        console.log(err);
      });
  }

  login = user => {
    const { email, password } = user;

    authService.login({ email, password })
      .then(user => this.setState({ user, isLoggedin: true }))
      .catch(err => {
        this.setState({isUserInvalid: true})
        console.log(err)
      });
  }

  logout = () => {
    authService.logout()
      .then( () => this.setState({user: null, isLoggedin: false}))
      .catch( (err) => console.log(err));
  }

  render() {
    const { user, isLoggedin, isLoading, isUserInvalid} = this.state;
    const { login, logout, signup } = this;

    return (
      <Provider value={{ isLoading, isLoggedin, user, isUserInvalid, login, logout, signup}}>
        {this.props.children}
      </Provider>
    )
  }
}