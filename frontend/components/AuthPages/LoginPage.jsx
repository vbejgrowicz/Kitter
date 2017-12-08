import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/stylesheets/AuthPages/AuthPages.scss';
import UserForm from './UserForm';
import Header from './Header';

class LoginPage extends React.Component {

  render() {
    return (
      <div id="auth">
        <Header type="Log in" />
        <div className="form">
          <div>Log in to Kitter</div>
          <UserForm formType='Log in' />
        </div>
      </div>
    );
  }
}

export default LoginPage;
