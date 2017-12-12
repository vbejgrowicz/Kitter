import React from 'react';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';
import Header from './Header';
import ErrorMessage from './ErrorMessage';

class LoginPage extends React.Component {

  render() {
    return (
      <div id="auth">
        <Header type="Log in" />
        <ErrorMessage />
        <div className="form">
          <div>Log in to Kitter</div>
          <UserForm formType='Log in' />
        </div>
      </div>
    );
  }
}

export default LoginPage;
