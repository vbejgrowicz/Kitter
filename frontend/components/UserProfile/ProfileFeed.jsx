import React from 'react';
import PostList from '../Posts/PostList';

class ProfileFeed extends React.Component {

  render() {
    return (
      <div id="profile-feed">
        <PostList category={'User'} />
      </div>
    );
  }
}

export default ProfileFeed;
