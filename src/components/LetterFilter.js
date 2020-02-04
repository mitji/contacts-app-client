import React, { Component } from 'react';

class LetterFilter extends Component {

  letterFilter = (letter) => {
    console.log(letter)
  }
  render() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return (     
      <section className="sidemenu__letter-list">
        {
          alphabet.map((letter, i) => {
            return (
              <button onClick={() => this.letterFilter(letter)} key={i}>{letter}</button>
            )
          })
        }
      </section>
      
    )
  }
}

export default LetterFilter;