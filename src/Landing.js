import React from 'react';
import { Link } from 'react-router-dom';
const Landing = (props) => {
  return (
    <>
      <h1>PETFUL</h1>
      <p>Welcome to Petful, the FIFO adoption center.</p>
      <Link to="/adoption">Click here to get started!</Link>
    </>
  );
};

export default Landing;
