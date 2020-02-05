import React, { Component } from 'react';
import * as actions from './../redux/actions/actions';

// import 'connect' HOC from 'react-redux'
import { connect } from 'react-redux';

import './../styles/contactDetails.scss';
import ContactCard from './ContactCard';

class ContactDetails extends Component {
  state = {
    search: ''
  }

  handleInput = (e) => {
    const { value } = e.target;
    this.setState({search: value});
    this.props.filterConnections(value)
  }

  render() {
    const { contactDetails } = this.props;
    
    return (
      <section className="contact-details">
        {
          contactDetails 
          ? (
            <div>
              <div className="contact-details__header">
                <img src={contactDetails.avatar} alt=""/>
                <h2 className="contact__name">{contactDetails.name}</h2>
                <input 
                  type="text" 
                  name="search" 
                  value={this.state.search} 
                  placeholder="Search..."
                  onChange={this.handleInput}  
                />

              </div>
              <div className="contact-details__connections">
                {
                  contactDetails.connections.map( connection => {
                    return <ContactCard imgUrl={connection.avatar} name={connection.name} />
                  })
                }
              </div>
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
    },
    filterConnections: search => {
      dispatch(actions.filterConnections(search));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);