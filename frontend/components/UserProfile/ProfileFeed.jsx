import React from 'react';
import PropTypes from 'prop-types';
import PostList from '../Posts/PostList';
import UserList from '../Users/UserList';

function ProfileFeed({ category }, context) {
  const handleClick = (post) => {
    context.router.history.push(`/${post.author.username}/status/${post._id}`);
  };

  return (
    <div id="profile-feed">
      {category === 'posts' ? (
        <div>
          <PostList category="User" onItemClick={handleClick} />
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

ProfileFeed.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default ProfileFeed;
