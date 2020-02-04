import React, { Component } from 'react';
import * as actions from './../redux/actions/actions';
import { connect } from 'react-redux';

class LetterFilter extends Component {

  render() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return (     
      <section className="sidemenu__letter-list">
        {
          alphabet.map((letter, i) => {
            return (
              <button onClick={() => this.props.filterByLetter(letter)} key={i}>{letter}</button>
            )
          })
        }
      </section>
      
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterByLetter: letter => {
      dispatch(actions.filterByLetter(letter));
    }
  }
}

export default connect(null, mapDispatchToProps)(LetterFilter);