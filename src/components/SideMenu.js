import React, { Component } from 'react';
import { withAuth } from './../services/AuthProvider';

import LetterFilter from './LetterFilter';
import SearchBar from './SearchBar';
import AllContacts from './AllContacts';

import './../styles/menu.scss';

class SideMenu extends Component {
  render() {
    const { isLoggedin } = this.props;
    return (     
      <div>
        {
          isLoggedin
          ? (
            <section className="sidemenu">
              <SearchBar />
              <LetterFilter />
              <AllContacts />
            </section>
          )
          : null
        }
        
      </div>
      
    )
  }
}

export default withAuth(SideMenu);