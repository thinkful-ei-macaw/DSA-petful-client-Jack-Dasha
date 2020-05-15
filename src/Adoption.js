import React, { Component } from 'react';
import config from './config';
import AdoptionForm from './AdoptionForm';
import Dog from './Dog';
import Cat from './Cat';
class Adoption extends Component {
  state = {
    currentDog: {},
    currentCat: {},
    people: [],
  };

  componentDidMount = () => {
    this.fetchPeople();
  };

  fetchPeople = () => {
    fetch(`${config.API_ENDPOINT}/api/people`)
      .then((res) => res.json())
      .then((data) => this.setState({ people: data.people }));
  };

  addPeople = (person) => {
    this.setState({ people: [...this.state.people, person] });
  };

  render() {
    return (
      <>
        <h1>Adoption</h1>
        <p>Currently the following people are in line for adptions: </p>
        <ul>
          {this.state.people.map((p) => (
            <li key={p + Math.random()}>{p}</li>
          ))}
        </ul>
        <AdoptionForm addPeople={this.addPeople} />
        <p>These are the two pets next in line for adoption: </p>
        <Dog />
        <Cat />
      </>
    );
  }
}
export default Adoption;
