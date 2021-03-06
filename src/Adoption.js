import React, { Component } from 'react';
import config from './config';
import AdoptionForm from './AdoptionForm';
import PetInfo from './PetInfo';
import Utils from './Utils';
import './Adoption.css';
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
    // The requests made in the code below are stricly for demo purposes only.
    // Here we both remove and add people to the queue inbetween you to sim
    // people entering and leaving the line.
    const intervalId = setInterval(() => {
      Utils.deletePerson();
      Utils.demoRandomAdoption();
      Utils.queueRandomPerson();
      this.fetchPeople();
      this.fetchDog();
      this.fetchCat();
      this.checkDemoStatus();
    }, 5000);
    this.setState({ intervalId });
  };

  checkDemoStatus = () => {
    // Because this project does not have auth right now, we simply store
    // the name of the person getting in line and compare the next person in line
    // with the one in our state at each interval.
    if (this.state.people[0] === this.state.currentUser) {
      clearInterval(this.state.intervalId);
      this.setState({ userCanAdopt: true });
    }
  };

  demoAdoptCat = () => {
    Utils.deleteCat();
    this.props.history.push({
      pathname: '/success',
      state: this.state.currentCat,
    });
  };

  demoAdoptDog = () => {
    console.log('demoadopt fired');
    Utils.deleteDog();
    this.props.history.push({
      pathname: '/success',
      state: this.state.currentDog,
    });
  };

  render() {
    return (
      <>
        <div className="adoption-wrapper">
          <h1>Adoption</h1>
          <p>Currently the following people are in line for adoptions: </p>
          <ul>
            {this.state.people &&
              this.state.people.map((p) => (
                <li key={p + Math.random()}>{p}</li>
              ))}
          </ul>
          {!this.state.currentUser && (
            <AdoptionForm
              triggerDemo={this.demoOnly}
              addPeople={this.addPeople}
            />
          )}
          {this.state.currentUser && !this.state.userCanAdopt && (
            <p>
              Great! Please wait in line. When your name comes up you'll see the
              option to adopt either pet.
            </p>
          )}
          {this.state.userCanAdopt && (
            <p>
              Congrats, you're up! Take a look at the pets below and click the
              'Adopt' button to adopt one of them.
            </p>
          )}
          <p>These are the two pets next in line for adoption: </p>
        </div>
        <div className="pet-wrapper">
          <PetInfo
            currentPet={this.state.currentDog}
            userCanAdopt={this.state.userCanAdopt}
            demoAdopt={this.demoAdoptDog}
          />
          <PetInfo
            currentPet={this.state.currentCat}
            userCanAdopt={this.state.userCanAdopt}
            demoAdopt={this.demoAdoptCat}
          />
        </div>
      </>
    );
  }
}
export default Adoption;
