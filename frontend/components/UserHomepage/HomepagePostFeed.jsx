import React from 'react';
import PropTypes from 'prop-types';
import PostList from '../Posts/PostList';
import HomepageNewPost from './HomepageNewPost';

function HomepagePostFeed({ user }) {
  return (
    <div id="profile-feed">
      <HomepageNewPost user={user} />
      <PostList category="All" />
    </div>
  );
}

HomepagePostFeed.propTypes = {
  user: PropTypes.object.isRequired,
};


export default HomepagePostFeed;
