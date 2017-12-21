import React from 'react';
import PropTypes from 'prop-types';
import PostList from '../Posts/PostList';
import UserList from '../Users/UserList';

function ProfileFeed({ category }) {
  return (
    <div id="profile-feed">
      {category === 'posts' ? (
        <PostList category="User" />
      ) : (
        <UserList category={category} />
      )}
    </div>
  );
}

ProfileFeed.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ProfileFeed;
