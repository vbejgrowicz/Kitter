import React from 'react';
import PropTypes from 'prop-types';
import NewPostForm from '../Posts/NewPostForm';
import UserImage from '../ProfileComponents/UserImage';

function HomepageNewPost({ user }) {
  return (
    <div id="homepage-post-box">
      <UserImage user={user} />
      <div className="post">
        <NewPostForm initialFocus={false} />
      </div>
    </div>
  );
}

HomepageNewPost.propTypes = {
  user: PropTypes.object.isRequired,
};

export default HomepageNewPost;
