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
    this.setState({currentPage: pageNumber});
  }

  render() {
    const { contacts } = this.props;

    let totalResults = 0;
    if (contacts) {
      totalResults = contacts.length;
    }
    const elementsPerPage = 16;
    const numOfPages = Math.ceil(totalResults / elementsPerPage);

    return (
      <section className="sidemenu__contacts-list">
        { contacts 
          ? (
            contacts.map((contact, i) => {
              if ( (i >= ((this.state.currentPage-1)*elementsPerPage) && i < this.state.currentPage*elementsPerPage) || this.props.activeSearch)
              return (
                <button className="contact" onClick={() => this.props.addContactDetails(contact)} key={i}>{contact.name}</button>
              )
            })
          )
          : <p>Loading...</p>
        }
        <Pagination nextPage={this.nextPage} numPages={numOfPages} currentPage={this.state.currentPage}/>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllContacts);