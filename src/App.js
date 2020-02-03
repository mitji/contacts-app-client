import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import './App.scss';

import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';

// public routes import
import Login from './pages/Login';
import Signup from './pages/Signup';
// private routes
import Contacts from './pages/Contacts';


function App() {
  return (
    <div className="">
      <Switch>
        <AnonRoute exact path="/login" component={Login} />
        <AnonRoute exact path="/signup" component={Signup} />
      
        <PrivateRoute exact path="/contacts" component={Contacts} />
      </Switch>
      
    </div>
  );
}

export default App;
