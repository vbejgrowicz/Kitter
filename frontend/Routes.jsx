import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPageIndex';
import UserPageIndex from './components/UserPage/UserPageIndex';
import UserProfilePage from './components/UserProfilePage';
import SignUpPage from './components/AuthPages/SignUpPage';
import LoginPage from './components/AuthPages/LoginPage';
import { checkUser } from './utils/apiUtils';
import { activeUser } from './actions/UserActions';
import { isLoading } from './actions/ViewActions';

class Routes extends React.Component {

  componentDidMount() {
    checkUser().then(res => {
      this.props.updateUser(res);
    });
  }

  requireLoggedIn() {
    const currentUser = this.props.UserReducer.username;
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

function mapStateToProps({ UserReducer, ViewReducer }) {
  return { UserReducer, ViewReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => {
      dispatch(activeUser(user));
      dispatch(isLoading(false));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Routes);
