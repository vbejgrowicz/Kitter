import React from 'react';
import PropTypes from 'prop-types';

function PostTile({ post }) {
  return (
    <div className="tile">
      <div className="post-data">
        <div className="post">{post.text}</div>
        <div className="author">@{post.author.username}</div>
      </div>
      <div className="image" style={{ backgroundImage: `url(${post.author.image})` }} />
    </div>
  );
}

PostTile.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostTile;
