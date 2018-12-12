import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GreatestCartoons from './cartoons/GreatestCartoons';

const App = () => (
  <Router>
    <div className="app">
      <div className="container">
        <GreatestCartoons />
      </div>
    </div>
  </Router>
);

export default App;
