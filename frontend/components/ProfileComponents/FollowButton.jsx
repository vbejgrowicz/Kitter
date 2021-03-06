import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/AuthActions';

function FollowButton({ user, AuthReducer, follow, unfollow }, contextTypes) {
  const authUser = AuthReducer.user;
  const { list } = authUser.following;
  const isFollowing = list.find(follower => follower._id === user._id);

  const handleClick = () => {
    if (authUser._id === null) {
      contextTypes.router.history.push('/login');
    } else if (isFollowing) {
      unfollow(authUser._id, user._id);
    } else {
      follow(authUser._id, user._id);
    }
  };

  return authUser._id !== user._id && (
    <div className="follow-button-container">
      <button
        className={isFollowing ? 'unfollow' : 'follow'}
        onClick={() => handleClick()}
      >
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
}

FollowButton.contextTypes = {
  router: PropTypes.object.isRequired,
};

FollowButton.propTypes = {
  user: PropTypes.object.isRequired,
  AuthReducer: PropTypes.object.isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
};

function mapStateToProps({ AuthReducer }) {
  return { AuthReducer };
}

const mapDispatchToProps = dispatch => (
  {
    follow: (authId, userId) => {
      dispatch(followUser(authId, userId));
    },
    unfollow: (authId, userId) => {
      dispatch(unfollowUser(authId, userId));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton);
