import React from 'react';
import PropTypes from 'prop-types';
import Linkify from 'linkifyjs/react';
import * as linkify from 'linkifyjs';
import mention from 'linkifyjs/plugins/mention';

mention(linkify);

function PostTile({ post }) {
  return (
    <div className="tile">
      <div className="post-data">
        <Linkify className="post">{post.text}</Linkify>
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
