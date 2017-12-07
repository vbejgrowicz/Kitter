import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../assets/stylesheets/AuthPages/AuthPages.scss';
import { activeUser } from '../../actions/UserActions';
import { handleInput, handleLogin } from './utils';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.handleLogin = handleLogin.bind(this);
    this.handleInput = handleInput.bind(this);
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal">
        <div className="login">
          <div>Have an Account?</div>
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

LoginModal.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => {
      dispatch(activeUser(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(LoginModal);
