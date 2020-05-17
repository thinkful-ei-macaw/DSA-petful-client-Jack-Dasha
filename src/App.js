import React from 'react';
import './App.css';
import Landing from './Landing';
import Adoption from './Adoption';
import AdoptionSuccess from './AdoptionSuccess';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/adoption" component={Adoption} />
      <Route exact path="/success" component={AdoptionSuccess} />
    </div>
  );
}

export default App;
