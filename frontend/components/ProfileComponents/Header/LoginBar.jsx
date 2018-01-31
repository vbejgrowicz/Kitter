import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function LoginBar() {
  return (
    <div id="nav">
      <div className="link-container">
        <div className="left">
          <NavLink to="/">
            <div className="brand-icon" />
          </NavLink>
        </div>
        <div className="center" />
        <div className="right">
          <Link to="/login"><button className="login-btn">Log in</button></Link>
        </div>
      </div>
    </div>
  );
}

export default LoginBar;
