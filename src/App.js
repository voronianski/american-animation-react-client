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
import Favorites from './pages/Favorites';
import FiftyGreatest from './pages/FiftyGreatest';
import TexAveryRed from './pages/TexAveryRed';
import Studios from './pages/Studios';
import Studio from './pages/Studio';
import Characters from './pages/Characters';
import Character from './pages/Character';
import About from './pages/About';
import Dashboard from './pages/Dashboard';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <div className="container py3 mb4">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/cartoons" component={Cartoons} />
          <Route exact path="/cartoons/favorites" component={Favorites} />
          <Route exact path="/cartoons/50-greatest" component={FiftyGreatest} />
          <Route exact path="/cartoons/tex-avery-red" component={TexAveryRed} />
          <Route path="/cartoons/:id" component={Cartoon} />
          <Route exact path="/studios" component={Studios} />
          <Route path="/studios/:id" component={Studio} />
          <Route exact path="/characters" component={Characters} />
          <Route path="/characters/:id" component={Character} />
          <Route path="/about" component={About} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
