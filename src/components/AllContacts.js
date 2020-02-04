import React, { Component } from 'react'
import axios from 'axios';
import * as actions from './../redux/actions/actions';
import { Link } from 'react-router-dom';

// import 'connect' HOC from 'react-redux'
import { connect } from 'react-redux';

class AllContacts extends Component {

  state = {
    contacts: null
  }

  componentDidMount() {
    axios.get('https://exercise.goldenspear.com/contacts.json')
      .then( response => { 
        this.setState({contacts: response.data});
        this.props.addAllContacts(response.data)
      })
      .catch(err => console.log(err))
  }

  render() {
    const { contacts } = this.props;
    console.log('reduuux', contacts)
    return (
      <section className="sidemenu__contacts-list">
        { this.state.contacts 
          ? (
            this.state.contacts.map(contact => {
              return (
                <p className="contact">{contact.name}</p>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllContacts);