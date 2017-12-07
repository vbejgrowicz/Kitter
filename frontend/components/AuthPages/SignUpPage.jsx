import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../assets/stylesheets/AuthPages/AuthPages.scss';
import { handleInput, handleSignup } from './utils';
import { activeUser } from '../../actions/UserActions';
import LoginModal from './LoginModal';

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: '',
      error: '',
      isOpen: false
    }
    this.handleSignup = handleSignup.bind(this);
    this.handleInput = handleInput.bind(this);
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
  }

  toggleLoginModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div id="auth">
        <div className="signup-header">
          <Link to="/"><span className="brand-icon"></span></Link>
          <div className="modal-btn" onClick={this.toggleLoginModal}>Have an Account? <span>Log in</span></div>
          <LoginModal show={this.state.isOpen} onClose={this.toggleModal} />
        </div>
        <div className="signup-form">
          <div>Join Kitter today.</div>
          {this.state.error}
          <form onSubmit={this.handleSignup}>
            <input type="text"
              placeholder="Full name"
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
            />
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

SignUpPage.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => {
      dispatch(activeUser(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(SignUpPage);
