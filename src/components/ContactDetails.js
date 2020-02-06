import React, { Component } from 'react';
import * as actions from './../redux/actions/actions';

// import 'connect' HOC from 'react-redux'
import { connect } from 'react-redux';

import './../styles/contactDetails.scss';
import ContactCard from './ContactCard';
import Pagination from './Pagination';

class ContactDetails extends Component {
  state = {
    search: '',
    currentPage: 1
  }

  handleInput = (e) => {
    const { value } = e.target;
    this.setState({search: value});
    this.props.filterConnections(value)
  }

  nextPage = (pageNumber) => {
    this.setState({currentPage: pageNumber});
  }

  render() {
    const { contactDetails, contactConnections} = this.props;
    
    // --- Calculation of Pagination inputs
    let currentPage = this.state.currentPage;

    let totalResults = 0;
    if(contactConnections) totalResults =  contactConnections.length;

    const elementsPerPage = 15;
    const numOfPages = Math.ceil(totalResults / elementsPerPage);
    
    if(currentPage > numOfPages) currentPage = 1;
    // ---

    return (
      <section className="contact-details">
        {
          contactDetails 
          ? (
            <div>
              <div className="contact-details__header">
                <img src={contactDetails.avatar} alt=""/>
                <h2 className="contact__name">{contactDetails.name}</h2>
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
              </div>
              <div className="contact-details__connections">
                {
                  
                  contactConnections.map( (connection, i) => {
                    if ( (i >= ((currentPage-1)*elementsPerPage) && i < currentPage*elementsPerPage) || numOfPages === 1)
                    return <ContactCard imgUrl={connection.avatar} name={connection.name} />
                  })
                }
              </div>
              <Pagination nextPage={this.nextPage} numPages={numOfPages} currentPage={currentPage}/>
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
    contactDetails: state.contactDetails,
    contactConnections: state.contactConnections
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