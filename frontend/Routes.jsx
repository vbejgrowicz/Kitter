import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPageIndex';
import UserProfilePage from './components/UserProfilePage';
import SignUpPage from './components/AuthPages/SignUpPage';

class Routes extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/:userName" component={UserProfilePage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
