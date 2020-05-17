import React from 'react';
import { Link } from 'react-router-dom';
const Landing = (props) => {
  return (
    <>
      <div className="Landing">
        <div className="landing-wrapper">
          <h1>PETFUL</h1>
          <p>Welcome to Petful, the FIFO adoption center.</p>
          <Link to="/adoption">
            <button type="button">Click here to get started!</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Landing;
