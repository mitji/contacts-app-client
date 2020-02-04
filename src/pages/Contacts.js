import React, { Component } from 'react';
import { withAuth } from './../services/AuthProvider';
import SideMenu from '../components/SideMenu';
import ContactDetails from '../components/ContactDetails';

class Contacts extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <SideMenu />
        <ContactDetails />
      </div>
    )
  }
}

export default withAuth(Contacts);