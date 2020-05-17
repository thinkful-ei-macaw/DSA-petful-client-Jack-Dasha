import React from 'react';
import { Link } from 'react-router-dom';

const AdoptionSuccess = (props) => {
  const { imageURL, name } = props.location.state;
  return (
    <section>
      <h2>Congrats!</h2>
      <p>You have adopted {name}!</p>
      <img src={imageURL} alt="your new pet" />
      <Link to="/adoption">Click here to go back and adopt again!</Link>
    </section>
  );
};

export default AdoptionSuccess;
