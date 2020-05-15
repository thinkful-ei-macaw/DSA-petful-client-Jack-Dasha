import React, { Component } from 'react';
import config from './config';
class Cat extends Component {
  state = {
    currentCat: {},
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/api/pets/cats`)
      .then((res) => res.json())
      .then((data) => this.setState({ currentCat: data.nextCat }));
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
    } = this.state.currentCat;

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
export default Cat;
