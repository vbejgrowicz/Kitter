import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserForm from './UserForm';
import { logInUser } from '../../actions/AuthActions';

class LoginTile extends React.Component {
  handleClick() {
    this.props.guestLogin('Guest', 'Password');
  }

  render() {
    return (
      <div className="tile login">
        <div>Log in to your account</div>
        <UserForm formType="Log in" />
        <button className="btn" onClick={() => this.handleClick()}>Log in as Guest</button>
      </div>
    );
  }
}

LoginTile.propTypes = {
  guestLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    guestLogin: (username, password) => {
      dispatch(logInUser(username, password));
    },
  };
};

export default connect(null, mapDispatchToProps)(LoginTile);
