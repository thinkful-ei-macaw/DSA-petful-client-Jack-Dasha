import React, { Component } from 'react';
import config from './config';
class Dog extends Component {
  state = {
    currentDog: {},
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/api/pets/dogs`)
      .then((res) => res.json())
      .then((data) => this.setState({ currentDog: data.nextDog }));
  }

  render() {
    const {
      age,
      breed,
      description,
      gender,
      imageURL,
      name,
      story,
    } = this.state.currentDog;
    return (
      <div className="pet">
        <h2>{name}</h2>
        <img src={imageURL} alt="pet up for adoption" />
        <p>Age: {age}</p>
        <p>Breed: {breed}</p>
        <p>Gender: {gender}</p>
        <p>Description: {description}</p>
        <p>Story: {story}</p>
      </div>
    );
  }
}
export default Dog;
