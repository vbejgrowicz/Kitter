import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function ProfileUserInfo({ UserReducer }) {
  const { username, name } = UserReducer;

  return (
    <div id="profile-user-data">
      <div className="profile-user-name">{name}</div>
      <div className="profile-user-username">@{username}</div>
    </div>
  );
}

ProfileUserInfo.propTypes = {
  UserReducer: PropTypes.object.isRequired,
};


function mapStateToProps({ UserReducer, AuthReducer }) {
  return { UserReducer, AuthReducer };
}

export default connect(mapStateToProps, null)(ProfileUserInfo);
