import React from 'react';
import PostList from '../Posts/PostList';
import HomepageNewPost from './HomepageNewPost';

function HomepagePostFeed() {
  return (
    <div id="profile-feed">
      <HomepageNewPost />
      <PostList category="All" onItemClick={() => {}} />
    </div>
  );
}

export default HomepagePostFeed;
