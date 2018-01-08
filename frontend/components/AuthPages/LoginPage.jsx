import React from 'react';
import UserForm from './UserForm';
import GuestLoginButton from './GuestLoginButton';
import Header from './Header';
import ErrorMessage from './ErrorMessage';

function LoginPage() {
  return (
    <div id="auth">
      <Header type="Log in" />
      <ErrorMessage />
      <div className="form">
        <div>Log in to Kitter</div>
        <UserForm formType="Log in" />
        <GuestLoginButton />
      </div>
    </div>
  );
}

export default LoginPage;
