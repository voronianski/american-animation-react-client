import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Header from './components/Header';
import Cartoons from './pages/Cartoons';
import Cartoon from './pages/Cartoon';
import Studios from './pages/Studios';
import Studio from './pages/Studio';
import Characters from './pages/Characters';
import Character from './pages/Character';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <div className="container py3 mb4">
        <Switch>
          <Route exact path="/cartoons" component={Cartoons} />
          <Route path="/cartoons/:id" component={Cartoon} />
          <Route exact path="/studios" component={Studios} />
          <Route path="/studios/:id" component={Studio} />
          <Route exact path="/characters" component={Characters} />
          <Route path="/characters/:id" component={Character} />
          <Route render={() => <Redirect to="/cartoons" />} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
