import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { getUser } from './actions/AuthActions';
import LandingPage from './components/LandingPage/LandingPageIndex';
import SignUpPage from './components/AuthPages/SignUpPage';
import LoginPage from './components/AuthPages/LoginPage';

import ProfilePage from './components/UserProfile/ProfilePage';

import NavBar from './components/Header/NavBar';
import Homepage from './components/UserHomePage/Homepage';



class Routes extends React.Component {

  componentDidMount() {
    this.props.updateUser();
  }

  requireLoggedIn() {
    const currentUser = this.props.AuthReducer.username;
    if (currentUser) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const UserRoutes = () => {
      return (
        <Switch>
          <Redirect from="/signup" to="/" />
          <Redirect from="/login" to="/" />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/:username" component={ProfilePage} />
        </Switch>
      )
    }

    const NoUserRoutes = () => {
      return (
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/:username" component={ProfilePage} />
        </Switch>
      )
    }

    const status = this.props.AuthReducer.isLoading;
    return status ? (
      <div>Loading...</div>
    ) : (
      <Router>
        {this.requireLoggedIn() ? (
            <div>
              <NavBar />
              <UserRoutes />
            </div>
        ) : (
          <NoUserRoutes />
        )}
      </Router>
    );
  }
}

function mapStateToProps({ AuthReducer }) {
  return { AuthReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => {
      dispatch(getUser());
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Routes);
