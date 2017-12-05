import React from 'react';

class LoginTile extends React.Component {

  render() {
    return (
      <div className="tile login">
        <div>Log in to your account</div>
        <form>
          <input type="text" placeholder="Username" name="username" />
          <input type="password" placeholder="Password" name="password" />
          <button className="btn">Log in</button>
        </form>
        <form>
          <button className="btn">Log in as Guest</button>
        </form>
      </div>
    );
  }
}

export default LoginTile;
