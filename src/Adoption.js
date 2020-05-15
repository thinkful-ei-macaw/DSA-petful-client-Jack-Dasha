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
    currentUser: '',
    userCanAdopt: false,
    intervalId: null,
  };

  componentDidMount = () => {
    this.fetchPeople();
    this.fetchDog();
    this.fetchCat();
  };

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  };

  fetchPeople = () => {
    fetch(`${config.API_ENDPOINT}/api/people`)
      .then((res) => res.json())
      .then((data) => this.setState({ people: data.people }));
  };

  fetchDog = () => {
    fetch(`${config.API_ENDPOINT}/api/pets/dogs`)
      .then((res) => res.json())
      .then((data) => this.setState({ currentDog: data.nextDog }));
  };

  fetchCat = () => {
    fetch(`${config.API_ENDPOINT}/api/pets/cats`)
      .then((res) => res.json())
      .then((data) => this.setState({ currentCat: data.nextCat }));
  };

  addPeople = (person) => {
    this.setState({ people: [...(this.state.people || []), person] });
    this.setState({ currentUser: person });
  };

  demoOnly = () => {
    const intervalId = setInterval(() => {
      fetch(`${config.API_ENDPOINT}/api/people`, {
        method: 'DELETE',
      });
      fetch(`${config.API_ENDPOINT}/api/pets/dogs`, {
        method: 'DELETE',
      });
      this.fetchPeople();
      this.fetchDog();
      this.checkDemoStatus();
    }, 1000);
    this.setState({ intervalId });
  };

  checkDemoStatus = () => {
    if (this.state.people[1] === this.state.currentUser) {
      clearInterval(this.state.intervalId);
      this.setState({ userCanAdopt: true });
    }
  };

  render() {
    return (
      <>
        <h1>Adoption</h1>
        <p>Currently the following people are in line for adptions: </p>
        <ul>
          {this.state.people &&
            this.state.people.map((p) => <li key={p + Math.random()}>{p}</li>)}
        </ul>
        {!this.state.currentUser && (
          <AdoptionForm
            triggerDemo={this.demoOnly}
            addPeople={this.addPeople}
          />
        )}
        {this.state.currentUser && (
          <p>
            Great! Please wait in line. When your name comes up you'll see the
            option to adopt either pet.
          </p>
        )}
        {this.state.userCanAdopt && <p>Congrats, you're up!</p>}
        <p>These are the two pets next in line for adoption: </p>
        <Dog
          currentDog={this.state.currentDog}
          userCanAdopt={this.state.userCanAdopt}
        />
        <Cat
          currentCat={this.state.currentCat}
          userCanAdopt={this.state.userCanAdopt}
        />
      </>
    );
  }
}
export default Adoption;
