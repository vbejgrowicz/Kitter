import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/stylesheets/AuthPages.scss';

class SignUpPage extends React.Component {
  render() {
    return (
      <div className="signup-page">
        <div className="top-bar">
          <Link to="/"><span className="brand-icon"></span></Link>
          <span>Have an Account? <span>Log in</span></span>
        </div>
        <div className="signup">
          <div>Join Kitter today.</div>
          <form>
            <input type="text" name="name" placeholder="Full name"/>
            <input type="text" name="username" placeholder="Username"/>
            <input type="password" name="password" placeholder="Password"/>
            <button>Sign up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
