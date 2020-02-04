import React, { Component } from 'react';

class SearchBar extends Component {

  render() {
    return (     
      <section className="sidemenu__search-bar">
        <form action="">
          <input type="text" name="filter" placeholder="Search..."/>
        </form>
      </section>
      
    )
  }
}

export default SearchBar;