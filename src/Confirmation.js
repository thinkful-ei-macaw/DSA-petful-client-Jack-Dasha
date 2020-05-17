import React, { Component } from 'react';
import config from './config';
import './Confirmation.css';
import { Link } from 'react-router-dom';

class Confirmation extends Component {
  render() {
    return (
      <div className="Confirmation">
        <div className="conf-wrapper">
          <h2>congrats you got a pet!</h2>
          <p>thanks, you're a good person</p>
          <Link to="/">
            <button type="button">goodbye</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Confirmation;
