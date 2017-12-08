import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../assets/stylesheets/AuthPages/AuthPages.scss';
import UserForm from './UserForm';
import LoginModal from './LoginModal';

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
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
          <UserForm formType="Sign up"/>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
