import React, { Component } from 'react';
import * as actions from './../redux/actions/actions';

// import 'connect' HOC from 'react-redux'
import { connect } from 'react-redux';

import './../styles/contactDetails.scss';

class ContactDetails extends Component {

  render() {
    const { contactDetails } = this.props;
    return (
      <section className="contact-details">
        {
          contactDetails 
          ? (
              <div className="contact-details__header">
                {/* <img src={contactDetails.avatar} alt=""/>
                <h2 className="contact__name">{contactDetails.name}</h2>
                <form action="">
                  <input type="text"/>
                </form> */}
                <h2>nameee</h2>
              </div>

          )
          : <h2>No contact selected !</h2>
        }
      </section>
    )
  }
}

// redux setup in component
const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    contactDetails: state.contactDetails
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addContactDetails: contact => {
      dispatch(actions.addContactDetails(contact));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);