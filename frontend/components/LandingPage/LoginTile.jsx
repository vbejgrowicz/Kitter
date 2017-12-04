import React from 'react';

class LoginTile extends React.Component {

  render() {
    return (
      <div className="loginForm">
        <div>Log in to your account</div>
        <form>
          <input type="text" placeholder="Username" name="username" />
          <input type="password" placeholder="Password" name="password" />
          <button className="btn">Log in</button>
        </form>
      </div>
    );
  }
}

export default LoginTile;
