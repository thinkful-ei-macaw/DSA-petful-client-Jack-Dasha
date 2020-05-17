import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Dog extends Component {
  render() {
    const {
      age,
      breed,
      description,
      gender,
      imageURL,
      name,
      story,
    } = this.props.currentDog;
    return (
      <div className="pet">
        <h2>{name}</h2>
        <img src={imageURL} alt="pet up for adoption" />
        <p>Age: {age}</p>
        <p>Breed: {breed}</p>
        <p>Gender: {gender}</p>
        <p>Description: {description}</p>
        <p>Story: {story}</p>
        {this.props.userCanAdopt && (
          <Link to="/Confirmation">
            <button type="button">Adopt</button>
          </Link>
        )}
      </div>
    );
  }
}
export default Dog;
