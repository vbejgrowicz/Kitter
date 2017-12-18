import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { getUser } from './actions/AuthActions';
import LandingPage from './components/LandingPage/LandingPageIndex';
import SignUpPage from './components/AuthPages/SignUpPage';
import LoginPage from './components/AuthPages/LoginPage';
import ProfilePage from './components/UserProfile/ProfilePage';
import NavBar from './components/Header/NavBar';
import Homepage from './components/UserHomepage/Homepage';

class Routes extends React.Component {
  componentDidMount() {
    this.props.getAuthorizedUser();
  }

  requireLoggedIn() {
    const currentUser = this.props.AuthReducer.user.username;
    if (currentUser) {
      return true;
    }
    return false;
  }

  render() {
    const UserRoutes = () => (
      <Switch>
        <Redirect from="/signup" to="/" />
        <Redirect from="/login" to="/" />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/:username" component={ProfilePage} />
      </Switch>
    );

    const NoUserRoutes = () => (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/:username" component={ProfilePage} />
      </Switch>
    );

    const { isLoading } = this.props.AuthReducer.user;
    return isLoading ? (
      null
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

Routes.propTypes = {
  getAuthorizedUser: PropTypes.func.isRequired,
  AuthReducer: PropTypes.object.isRequired,
};


function mapStateToProps({ AuthReducer }) {
  return { AuthReducer };
}

const mapDispatchToProps = dispatch => (
  {
    getAuthorizedUser: () => {
      dispatch(getUser());
    },
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Routes);
