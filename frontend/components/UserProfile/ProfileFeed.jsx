import React from 'react';
import PostList from '../Posts/PostList';

function ProfileFeed() {
  return (
    <div id="profile-feed">
      <PostList category="User" />
    </div>
  );
}

export default ProfileFeed;
