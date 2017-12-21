import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/AuthActions';

function FollowButton({ user, AuthReducer, follow, unfollow }) {
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

  return authUser.id !== user.id && (
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
    follow: (user) => {
      dispatch(followUser(user));
    },
    unfollow: (user) => {
      dispatch(unfollowUser(user));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton);
