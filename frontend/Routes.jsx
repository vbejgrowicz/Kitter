import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPageIndex';
import UserProfilePage from './components/UserProfilePage';
import SignUpPage from './components/AuthPages/SignUpPage';
import { checkUser } from './utils/apiUtils';

class Routes extends React.Component {
  componentDidMount() {
    checkUser().then(res => {
      console.log('this is user', res)
    });
  }

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
