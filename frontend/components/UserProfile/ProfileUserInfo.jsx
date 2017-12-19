import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function ProfileUserInfo({ UserReducer }) {
  const { username, name, data } = UserReducer;
  return (
    <div id="profile-user-data">
      <div>{name}</div>
      <div>{username}</div>
      <div>Posts {data.posts}</div>
      <button>Follow</button>
    </div>
  );
}

ProfileUserInfo.propTypes = {
  UserReducer: PropTypes.object.isRequired,
};


function mapStateToProps({ UserReducer }) {
  return { UserReducer };
}

export default connect(mapStateToProps, null)(ProfileUserInfo);
