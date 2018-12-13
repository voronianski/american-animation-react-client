import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Cartoons from './pages/Cartoons';
import Cartoon from './pages/Cartoon';

const App = () => (
  <Router>
    <div className="app">
      <div className="container py4">
        <Switch>
          <Route exact path="/cartoons" component={Cartoons} />
          <Route path="/cartoons/:id" component={Cartoon} />
          <Route render={() => <Redirect to="/cartoons" />} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
