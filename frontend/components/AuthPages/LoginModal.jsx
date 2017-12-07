import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../assets/stylesheets/AuthPages/AuthPages.scss';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    }
    this.handleSignup = this.handleLogin.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    if (this.state.error) {
      this.setState({error: ""});
    };
    const input = event.target.name;
    this.setState({
      [input]: event.target.value
    });
  }

  handleLogin(event) {
    event.preventDefault();
    const userData = {username: this.state.username, password: this.state.password};
    console.log(userData);
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
            <button>Sign Up</button>
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
