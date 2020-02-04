import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './services/AuthProvider';

// IMPORT REDUX
import { createStore } from "redux";
import { Provider } from 'react-redux';

// IMPORT THE REDUCER
import contactsReducer from './redux/reducers/contactsReducer';

// PASS THE REDUCER TO THE STORE & ENABLE REDUX DEV TOOLS
const store = createStore(
  contactsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </Router>,
  document.getElementById('root'),
);
