import React, { Component } from 'react';
import * as actions from './../redux/actions/actions';
import { connect } from 'react-redux';

class SearchBar extends Component {

  state = {
    search: ''
  }

  handleInput = (e) => {
    const { value } = e.target;
    this.setState({search: value});
    this.props.filterBySearch(value);
  }

  removeFilters = () => {
    this.setState({search: ''});
    this.props.removeAllFilters();
  }
  render() {
    return (     
      <section className="sidemenu__search-bar">

      <div className="inline-wrapper">
        <img src="./search.png" alt=""/>
        <input 
          type="text" 
          name="search" 
          value={this.state.search} 
          placeholder="Search..."
          onChange={this.handleInput}
          className="search" 
        />
      </div>

      <button onClick={() => this.removeFilters()}>Remove all filters</button>
        
      </section>
      
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterBySearch: searchStr => {
      dispatch(actions.filterBySearch(searchStr));
    },
    removeAllFilters: () => {
      dispatch(actions.removeAllFilters());
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);