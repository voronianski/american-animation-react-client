import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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

const App = () => (
  <Router>
    <Route
      render={({ location }) => (
        <div className="app">
          <Header />
          <div className="container py3 mb4">
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Switch location={location}>
                  <Route exact path="/cartoons" component={Cartoons} />
                  <Route path="/cartoons/favorites" component={Favorites} />
                  <Route
                    path="/cartoons/50-greatest"
                    component={FiftyGreatest}
                  />
                  <Route
                    path="/cartoons/tex-avery-red"
                    component={TexAveryRed}
                  />
                  <Route path="/cartoons/:id" component={Cartoon} />
                  <Route exact path="/studios" component={Studios} />
                  <Route path="/studios/:id" component={Studio} />
                  <Route exact path="/characters" component={Characters} />
                  <Route path="/characters/:id" component={Character} />
                  <Route render={() => <Redirect to="/cartoons" />} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      )}
    />
  </Router>
);

export default App;
