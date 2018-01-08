import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logInUser } from '../../actions/AuthActions';

class GuestLoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.guestLogin('Guest', 'Password');
  }

  render() {
    return (
      <button className="blue-btn" onClick={this.handleClick}>
        Log in as Guest
      </button>
    );
  }
}

GuestLoginButton.propTypes = {
  guestLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
  {
    guestLogin: (username, password) => {
      dispatch(logInUser(username, password));
    },
  }
);

export default connect(null, mapDispatchToProps)(GuestLoginButton);
