import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/AuthActions';

function FollowButton({ UserReducer, AuthReducer, follow, unfollow }) {
  const user = UserReducer;
  const authUser = AuthReducer.user;
  const { list } = authUser.following;
  const isFollowing = list.find(follower => follower.id === user.id);

  const handleClick = () => (
    isFollowing ? (
      unfollow(user)
    ) : (
      follow(user)
    )
  );

  return (
    <button onClick={() => handleClick()}>{isFollowing ? 'Unfollow' : 'Follow'}</button>
  );
}

FollowButton.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton);
