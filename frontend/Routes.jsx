import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPageIndex';
import UserPageIndex from './components/UserPage/UserPageIndex';
import UserProfilePage from './components/UserProfilePage';
import SignUpPage from './components/AuthPages/SignUpPage';
import LoginPage from './components/AuthPages/LoginPage';
import { getUser } from './actions/AuthActions';

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
    const AuthRoutes = () => {
      return (
        <Switch>
          <Redirect from="/signup" to="/" />
          <Redirect from="/login" to="/" />
          <Route exact path="/" component={UserPageIndex} />
          <Route exact path="/:userName" component={UserProfilePage} />
        </Switch>
      )
    }

    const NonAuthRoutes = () => {
      return (
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
        </Switch>
      )
    }

    const status = this.props.ViewReducer.isLoading;
    return status ? (
      <div>Loading...</div>
    ) : (
      <Router>
        {this.requireLoggedIn() ? (
            <AuthRoutes />
        ) : (
          <NonAuthRoutes />
        )}
      </Router>
    );
  }
}

function mapStateToProps({ ViewReducer, AuthReducer }) {
  return { ViewReducer, AuthReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => {
      dispatch(getUser());
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Routes);
