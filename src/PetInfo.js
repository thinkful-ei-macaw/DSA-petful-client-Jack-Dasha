import React from 'react';
import './PetInfo.css';
const PetInfo = (props) => {
  const {
    age,
    breed,
    description,
    gender,
    imageURL,
    name,
    story,
  } = props.currentPet;
  return (
    <div className="pet">
      <h2>{name}</h2>
      <img src={imageURL} alt="pet up for adoption" />
      <p>
        <span>Age:</span> {age}
      </p>
      <p>
        <span>Breed:</span> {breed}
      </p>
      <p>
        <span>Gender:</span> {gender}
      </p>
      <p>
        <span>Description:</span> {description}
      </p>
      <p>
        <span>Story:</span> {story}
      </p>
      {props.userCanAdopt && <button onClick={props.demoAdopt}>Adopt</button>}
    </div>
  );
};

export default PetInfo;
