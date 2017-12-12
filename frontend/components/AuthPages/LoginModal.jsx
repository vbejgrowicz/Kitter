import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';

class LoginModal extends React.Component {

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal-form">
          <div>Have an Account?</div>
          <UserForm formType="Log in" />
          <hr />
          <div>New to Kitter?</div>
          <button className="white-btn" onClick={this.props.onClose}>Sign up</button>
        </div>
      </div>
    );
  }
}

export default LoginModal;
