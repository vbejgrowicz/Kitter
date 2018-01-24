import React from 'react';
import PropTypes from 'prop-types';
import Linkify from 'linkifyjs/react';
import * as linkify from 'linkifyjs';
import mention from 'linkifyjs/plugins/mention';

mention(linkify);

function PostTile({ post }, contextTypes) {
  const redirect = () => {
    contextTypes.router.history.push(`/${post.author.username}`);
  };
  const linkProps = {
    onClick: event => event.stopPropagation(),
  };
  return (
    <div className="tile with-cursor" onClick={redirect}>
      <div className="post-data">
        <Linkify className="post" options={{ attributes: linkProps }}>{post.text}</Linkify>
        <div className="author">@{post.author.username}</div>
      </div>
      <div className="image" style={{ backgroundImage: `url(${post.author.image})` }} />
    </div>
  );
}

PostTile.contextTypes = {
  router: PropTypes.object.isRequired,
};

PostTile.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostTile;
