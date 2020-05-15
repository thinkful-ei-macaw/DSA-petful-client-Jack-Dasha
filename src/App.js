import React from 'react';
import './App.css';
import Landing from './Landing';
import Adoption from './Adoption';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/adoption" component={Adoption} />
    </div>
  );
}

export default App;
