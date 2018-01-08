import React from 'react';
import UserForm from './UserForm';
import GuestLoginButton from './GuestLoginButton';

function LoginTile() {
  return (
    <div className="tile login">
      <div>Log in to your account</div>
      <UserForm formType="Log in" />
      <GuestLoginButton />
    </div>
  );
}

export default LoginTile;
