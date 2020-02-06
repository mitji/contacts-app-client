import React, { Component } from 'react'
import axios from 'axios';
import * as actions from './../redux/actions/actions';
import { connect } from 'react-redux'; // import 'connect' HOC from 'react-redux'

import Pagination from './Pagination';

class AllContacts extends Component {

  state = {
    currentPage: 1
  }

  componentDidMount() {
    axios.get('https://exercise.goldenspear.com/contacts.json')
      .then( response => { 
        this.props.addAllContacts(response.data);
      })
      .catch(err => console.log(err))
  }

  nextPage = (pageNumber) => {
    this.props.deactivateSearch();
    this.setState({currentPage: pageNumber});
  }

  render() {
    const { contacts } = this.props;
    
    // --- Calculation of Pagination inputs
    let currentPage = this.state.currentPage;

    let totalResults = 0;
    if (contacts) totalResults = contacts.length;
    
    const elementsPerPage = 16;
    const numOfPages = Math.ceil(totalResults / elementsPerPage);

    if(currentPage > numOfPages) currentPage = 1;     // when current page is greater than the number of pages of filter results
    if(this.props.activeSearch) currentPage = 1;      // when we are filtering, set current page to the first page of results
    // ---
    return (
      <section className="sidemenu__contacts-list">
        { contacts 
          ? (
            contacts.map((contact, i) => {
              if ((i >= ((currentPage-1)*elementsPerPage) && i < currentPage*elementsPerPage) || numOfPages === 1)  {
                return (
                  <button className="contact" onClick={() => this.props.addContactDetails(contact)} key={i}>{contact.name}</button>
                )
              }
              else {
                return null
              }
            })
          )
          : <p>Loading...</p>
        }
        <Pagination nextPage={this.nextPage} numPages={numOfPages} currentPage={currentPage}/>
      </section>
    )
  }
}

// redux setup in component
const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    activeSearch: state.activeSearch
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addAllContacts: allContacts => {
      dispatch(actions.addAllContacts(allContacts));
    },
    addContactDetails: contact => {
      dispatch(actions.addContactDetails(contact));
    },
    deactivateSearch: () => {
      dispatch(actions.deactivateSearch())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllContacts);