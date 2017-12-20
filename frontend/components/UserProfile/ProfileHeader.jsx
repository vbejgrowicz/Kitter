import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
function ProfileHeader({ UserReducer, AuthReducer }) {

  return (
    <div id="profile-header">
      <div className="profile-image" />
      <div className="header-info">
        <div className="links">
          <Link className="posts data" to={`/${user.username}`}>
            <div className="title">Meows</div>
            <div className="count">{user.data.posts}</div>
          </Link>
          <Link className="following data" to={`/${user.username}/following`}>
            <div className="title">Following</div>
            <div className="count">{user.data.following}</div>
          </Link>
          <Link className="following data" to={`/${user.username}/following`}>
            <div className="title">Followers</div>
            <div className="count">{user.data.followers}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

ProfileHeader.propTypes = {
  UserReducer: PropTypes.object.isRequired,
  AuthReducer: PropTypes.object.isRequired,
};

function mapStateToProps({ UserReducer, AuthReducer }) {
  return { UserReducer, AuthReducer };
}

export default connect(mapStateToProps, null)(ProfileHeader);
