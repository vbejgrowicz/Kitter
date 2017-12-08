import React from 'react';
import { connect } from 'react-redux';
import { handleInput } from '../AuthPages/utils';
import { logInUser } from '../../actions/AuthActions';

class LoginTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: '',
      error: ''
    }
    this.handleInput = handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateUser(this.state.username, this.state.password);
  }

  guestLogin() {
    this.props.updateUser('Guest', 'Password');
  }

  render() {
    return (
      <div className="tile login">
        <div>Log in to your account</div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleInput}
          />
          <input type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInput}
          />
          <button className="btn">Log in</button>
        </form>
        <button className="btn" onClick={this.guestLogin}>Log in as Guest</button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (username, password) => {
      dispatch(logInUser(username, password));
    },
  };
};

export default connect(null, mapDispatchToProps)(LoginTile);
