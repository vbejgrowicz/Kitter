import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPageIndex';
import HomePage from './components/LandingPage/HomePage';
import UserProfilePage from './components/UserProfilePage';
import SignUpPage from './components/AuthPages/SignUpPage';
import LoginPage from './components/AuthPages/LoginPage';
import { checkUser } from './utils/apiUtils';
import { activeUser } from './actions/UserActions';

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    checkUser().then(res => {
      this.props.updateUser(res);
      this.setState({ isLoading: false });
    });
  }

  requireLoggedIn() {
    console.log('check');
    console.log(this.state);
    if (!this.state.isLoading || this.props.UserReducer.username) {
      console.log('isnt isLoading');
      const currentUser = this.props.UserReducer.username;
      console.log(currentUser);
      if (currentUser) {
        return true;
      } else {
        return false;
      }
    }
  }

  render() {
    const AuthRoutes = () => {
      return (
        <Switch>
          <Route exact path="/" component={HomePage} />
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

    return (
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

function mapStateToProps({ UserReducer }) {
  return { UserReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => {
      dispatch(activeUser(user));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Routes);
