import React, { Component } from 'react'
import axios from 'axios';
import * as actions from './../redux/actions/actions';
import { connect } from 'react-redux'; // import 'connect' HOC from 'react-redux'

import Pagination from './Pagination';

class AllContacts extends Component {

  state = {
    totalResults: 0,
    currentPage: 1
  }

  componentDidMount() {
    axios.get('https://exercise.goldenspear.com/contacts.json')
      .then( response => { 
        this.props.addAllContacts(response.data);
        this.setState({totalResults: response.data.length});
      })
      .catch(err => console.log(err))
  }

  nextPage = (pageNumber) => {
    this.setState({currentPage: pageNumber});
  }

  render() {
    const { contacts } = this.props;
    const elementsPerPage = 16;
    const numOfPages = Math.ceil(this.state.totalResults / elementsPerPage);

    return (
      <section className="sidemenu__contacts-list">
        { contacts 
          ? (
            contacts.map((contact, i) => {
              if ( i >= ((this.state.currentPage-1)*elementsPerPage) && i < this.state.currentPage*elementsPerPage)
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
    contacts: state.contacts
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