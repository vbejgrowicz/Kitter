import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/AuthActions';

function ProfileUserInfo({
  UserReducer,
  AuthReducer,
  follow,
  unfollow,
}) {
  const {
    id,
    username,
    name,
    data,
  } = UserReducer;
  const user = { id, username, name };

  const getFollowButton = () => {
    const { list } = AuthReducer.user.following;
    const isFollowing = list.find(follower => follower.id === user.id);
    return !isFollowing ? (
      <button onClick={() => follow(user)}>Follow</button>
    ) : (
      <button onClick={() => unfollow(user)}>Unfollow</button>
    );
  };

  const getButton = () => {
    const authUser = AuthReducer.user;
    if (authUser.id === user.id) {
      return null;
    }
    return getFollowButton();
  };

  return (
    <div id="profile-user-data">
      <div>{name}</div>
      <div>{username}</div>
      <div>Posts {data.posts}</div>
      {getButton()}
    </div>
  );
}

ProfileUserInfo.propTypes = {
  UserReducer: PropTypes.object.isRequired,
  AuthReducer: PropTypes.object.isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
};


function mapStateToProps({ UserReducer, AuthReducer }) {
  return { UserReducer, AuthReducer };
}

const mapDispatchToProps = dispatch => (
  {
    follow: (user) => {
      dispatch(followUser(user));
    },
    unfollow: (user) => {
      dispatch(unfollowUser(user));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUserInfo);
