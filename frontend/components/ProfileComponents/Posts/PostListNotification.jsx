import React from 'react';
import PropTypes from 'prop-types';

function PostListNotification({ handleNewPosts, count }) {
  return (
    <div className="new-post-notification" onClick={handleNewPosts}>See {count} new Meow</div>
  );
}


PostListNotification.propTypes = {
  handleNewPosts: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default PostListNotification;
