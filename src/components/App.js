import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <Router>
    <div className="app">
      <h1>Test run</h1>
      <img
        src="https://voronianski.github.io/american-animation-graphql-api/bugs-bunny.gif"
        alt="bugs bunny"
        width="300"
      />
    </div>
  </Router>
);

export default App;
