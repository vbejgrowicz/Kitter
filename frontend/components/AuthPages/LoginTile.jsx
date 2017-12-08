import React from 'react';
import { connect } from 'react-redux';
import UserForm from './UserForm';
import { logInUser } from '../../actions/AuthActions';

class LoginTile extends React.Component {

  handleClick() {
    console.log(this.props);
    this.props.guestLogin('Guest', 'Password');
  }

  render() {
    return (
      <div className="tile login">
        <div>Log in to your account</div>
        <UserForm formType="Log in" />
        <button className="btn" onClick={this.handleClick.bind(this)}>Log in as Guest</button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    guestLogin: (username, password) => {
      dispatch(logInUser(username, password));
    },
  };
};

export default connect(null, mapDispatchToProps)(LoginTile);
