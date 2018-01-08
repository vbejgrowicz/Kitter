import React from 'react';
import PropTypes from 'prop-types';
import UserForm from './UserForm';
import GuestLoginButton from './GuestLoginButton';

function LoginModal({ show, onClose }) {
  const ignoreClose = (event) => {
    event.stopPropagation();
  };
  if (!show) {
    return null;
  }
  return (
    <div id="full-screen" onClick={onClose}>
      <div className="modal" onClick={ignoreClose}>
        <div className="modal-form">
          <div>Have an Account?</div>
          <UserForm formType="Log in" />
          <GuestLoginButton />
          <hr />
          <div>New to Kitter?</div>
          <button className="white-btn" onClick={onClose}>Sign up</button>
        </div>
      </div>
    </div>
  );
}

LoginModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginModal;
