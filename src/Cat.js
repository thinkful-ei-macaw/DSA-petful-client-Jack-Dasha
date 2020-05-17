import React, { Component } from 'react';
class Cat extends Component {
  render() {
    const {
      age,
      breed,
      description,
      gender,
      imageURL,
      name,
      story,
    } = this.props.currentCat;

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
          <button onClick={this.props.demoAdopt}>Adopt</button>
        )}
      </div>
    );
  }
}
export default Cat;
