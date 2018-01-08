import React from 'react';
import PropTypes from 'prop-types';
import PostList from '../ProfileComponents/Posts/PostList';
import UserList from '../ProfileComponents/Users/UserList';

function ProfileFeed({ category }) {
  return (
    <div id="profile-feed">
      {category === 'posts' ? (
        <div>
          <PostList category="User" />
        </div>
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
