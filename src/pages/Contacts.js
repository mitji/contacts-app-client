import React, { Component } from 'react';
import { withAuth } from './../services/AuthProvider';
import SideMenu from '../components/SideMenu';
import ContactDetails from '../components/ContactDetails';

class Contacts extends Component {
  render() {
    return (
      <div>
        <SideMenu />
        <ContactDetails />
        <button onClick={this.props.logout} className="btn-logout">Logout</button>
      </div>
    )
  }
}

export default withAuth(Contacts);