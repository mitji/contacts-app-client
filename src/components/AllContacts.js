import React, { Component } from 'react'
import axios from 'axios';
import * as actions from './../redux/actions/actions';
import { Link } from 'react-router-dom';

// import 'connect' HOC from 'react-redux'
import { connect } from 'react-redux';

class AllContacts extends Component {

  componentDidMount() {
    axios.get('https://exercise.goldenspear.com/contacts.json')
      .then( response => { 
        this.props.addAllContacts(response.data)
      })
      .catch(err => console.log(err))
  }

  render() {
    const { contacts } = this.props;

    return (
      <section className="sidemenu__contacts-list">
        { contacts 
          ? (
            contacts.map(contact => {
              return (
                <button className="contact" onClick={() => this.props.addContactDetails(contact)}>{contact.name}</button>
              )
            })
          )
          : <p>Loading...</p>
        }
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