import React from 'react';
import PropTypes from 'prop-types';
import LoginBar from './LoginBar';
import UserBar from './UserBar';

function NavBar({ user }) {
  return user._id !== null ? (
    <UserBar user={user} />
  ) : (
    <LoginBar />
  );
}

NavBar.propTypes = {
  user: PropTypes.object.isRequired,
};

export default NavBar;
