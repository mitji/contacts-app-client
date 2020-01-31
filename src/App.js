import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import './App.scss';

// public routes import
import Login from './pages/Login';
import Signup from './pages/Signup';
// private routes

function App() {
  return (
    <div className="">
      <h1>hello</h1>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
      
    </div>
  );
}

export default App;
