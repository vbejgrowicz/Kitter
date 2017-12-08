import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../assets/stylesheets/AuthPages/AuthPages.scss';
import { logInUser } from '../../actions/AuthActions';
import { handleInput } from './utils';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = handleInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateUser(this.state.username, this.state.password);
  };


  render() {
    return (
      <div id="auth">
        <div className="login-header">
          <Link to="/"><span className="brand-icon"></span></Link>
        </div>
        <div className="login-form">
          {this.state.error}
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
            <button>Log in</button>
          </form>
        </div>
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

export default connect(null, mapDispatchToProps)(LoginPage);
