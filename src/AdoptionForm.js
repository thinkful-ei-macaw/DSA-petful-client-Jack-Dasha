import React, { Component } from 'react';
import config from './config';
import './AdoptionForm.css';

class AdoptionForm extends Component {
  state = {
    name: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let name = this.state.name;
    fetch(`${config.API_ENDPOINT}/api/people`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });
    this.props.addPeople(name);
    this.props.triggerDemo();
    this.setState({ name: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Get in line</h3>
        <p>
          Interested in adopting a pet? Enter your name below and hit "Submit"
          to get in line. You will be adopting the next available pet once you
          are first in line.
        </p>
        <label htmlFor="name">Enter name here: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <input type="submit" id="submit" />
      </form>
    );
  }
}
export default AdoptionForm;
