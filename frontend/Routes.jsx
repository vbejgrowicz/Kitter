import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { getUser } from './actions/AuthActions';
import LandingPage from './components/LandingPage/LandingPageIndex';
import SignUpPage from './components/AuthPages/SignUpPage';
import LoginPage from './components/AuthPages/LoginPage';
import ProfilePage from './components/UserProfile/ProfilePage';
import NavBar from './components/ProfileComponents/Header/NavBar';
import Homepage from './components/UserHomepage/Homepage';

class Routes extends React.Component {
  componentWillMount() {
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
    const ProfileRoutes = () => (
      <div>
        <NavBar user={this.props.AuthReducer.user} />
        <Route exact path="/" component={Homepage} />
        <Route path="/:username" component={ProfilePage} />
      </div>
    );

    const UserRoutes = () => (
      <Switch>
        <Redirect from="/signup" to="/" />
        <Redirect from="/login" to="/" />
        <ProfileRoutes />
      </Switch>
    );

    const NoUserRoutes = () => (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <ProfileRoutes />
      </Switch>
    );

    const { isLoading } = this.props.AuthReducer.user;
    return isLoading ? (
      null
    ) : (
      <Router>
        {this.requireLoggedIn() ? (
          <UserRoutes />
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
