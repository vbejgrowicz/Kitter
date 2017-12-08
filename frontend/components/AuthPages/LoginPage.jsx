import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/stylesheets/AuthPages/AuthPages.scss';
import UserForm from './UserForm';

class LoginPage extends React.Component {

  render() {
    return (
      <div id="auth">
        <div className="login-header">
          <Link to="/"><span className="brand-icon"></span></Link>
        </div>
        <div className="login-form">
          <UserForm formType='Log in' />
        </div>
      </div>
    );
  }
}

export default LoginPage;
