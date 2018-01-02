import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import FollowButton from './FollowButton';

function ProfileHeader({ UserReducer }) {
  const user = UserReducer;

  return (
    <div id="profile-header">
      <div className="user-image" />
      <div className="header-info">
        <div className="links">
          <NavLink activeClassName="active" className="posts data" exact to={`/${user.username}`}>
            <div className="title">Meows</div>
            <div className="count">{user.data.posts}</div>
          </NavLink>
          {user.data.follows.following > 0 && (
            <NavLink activeClassName="active" className="following data" to={`/${user.username}/following`}>
              <div className="title">Following</div>
              <div className="count">{user.data.follows.following}</div>
            </NavLink>
          )}
          {user.data.follows.followers > 0 && (
            <NavLink activeClassName="active" className="following data" to={`/${user.username}/followers`}>
              <div className="title">Followers</div>
              <div className="count">{user.data.follows.followers}</div>
            </NavLink>
          )}
          <FollowButton user={user} />
        </div>
      </div>
    </div>
  );
}

ProfileHeader.propTypes = {
  UserReducer: PropTypes.object.isRequired,
};

function mapStateToProps({ UserReducer }) {
  return { UserReducer };
}

export default connect(mapStateToProps, null, null, { pure: false })(ProfileHeader);
