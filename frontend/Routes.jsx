import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPageIndex';
import UserHomePage from './components/UserPage/UserHomePage';
import UserPage from './components/UserPage/UserPage';
import SignUpPage from './components/AuthPages/SignUpPage';
import LoginPage from './components/AuthPages/LoginPage';
import { getUser } from './actions/AuthActions';
import NavBar from './components/Header/NavBar';

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
          <Route exact path="/" component={UserHomePage} />
          <Route exact path="/:username" component={UserPage} />
        </Switch>
      )
    }

    const NonAuthRoutes = () => {
      return (
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/:username" component={UserPage} />
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
              <AuthRoutes />
            </div>
        ) : (
          <NonAuthRoutes />
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
