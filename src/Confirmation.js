import React, { Component } from 'react';
import config from './config';
import './Confirmation.css';

class Confirmation extends Component {
  render() {
    return (
      <div className="Confirmation">
        <div className="conf-wrapper">
          <h2>congrats you got a pet!</h2>
          <p>thanks, you're a good person</p>
        </div>
      </div>
    );
  }
}

export default Confirmation;
