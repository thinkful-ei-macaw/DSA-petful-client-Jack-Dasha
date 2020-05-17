import React from 'react';
import { Link } from 'react-router-dom';
import './AdoptionSuccess.css';
const AdoptionSuccess = (props) => {
  const { imageURL, name } = props.location.state;
  return (
    <section className="Confirmation">
      <div className="conf-wrapper">
        <h2>Congrats!</h2>
        <p>You have adopted {name}!</p>
        <img src={imageURL} alt="your new pet" />
        <Link to="/adoption">Click here to go back and adopt again!</Link>
      </div>
    </section>
  );
};

export default AdoptionSuccess;
