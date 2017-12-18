import React from 'react';
import PropTypes from 'prop-types';
import UserForm from './UserForm';

function LoginModal({ show, onClose }) {
  if (!show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-form">
        <div>Have an Account?</div>
        <UserForm formType="Log in" />
        <hr />
        <div>New to Kitter?</div>
        <button className="white-btn" onClick={onClose}>Sign up</button>
      </div>
    </div>
  );
}

LoginModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginModal;
