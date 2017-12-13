import React from 'react';
import UserProfileCard from './UserProfileCard';
import UserProfilePostBox from './UserProfilePostBox';
import PostList from '../Posts/PostList';

class UserHomepage extends React.Component {

  render() {
    return (
      <div id="user-home-page">
        <UserProfileCard />
        <div id="profile-feed">
          <UserProfilePostBox />
          <PostList />
        </div>
      </div>
    );
  }
}

export default UserHomepage;
