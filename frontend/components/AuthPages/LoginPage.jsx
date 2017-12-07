import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../assets/stylesheets/AuthPages/AuthPages.scss';
import { activeUser } from '../../actions/UserActions';
import { handleInput, handleLogin } from './utils';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: '',
      error: ''
    }
    this.handleLogin = handleLogin.bind(this);
    this.handleInput = handleInput.bind(this);
  }

  render() {
    return (
      <div id="auth">
        <div className="login-header">
          <Link to="/"><span className="brand-icon"></span></Link>
        </div>
        <div className="login-form">
          {this.state.error}
          <form onSubmit={this.handleLogin}>
            <input type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleInput}
            />
            <input type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInput}
            />
            <button>Log in</button>
          </form>
        </div>
      </div>
    );
  }
}

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => {
      dispatch(activeUser(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
