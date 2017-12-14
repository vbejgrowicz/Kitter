import React from 'react';
import HomepageUserInfo from './HomepageUserInfo';
import HomepagePostFeed from './HomepagePostFeed';

class Homepage extends React.Component {

  render() {
    return (
      <div id="user-home-page">
        <HomepageUserInfo />
        <HomepagePostFeed />
      </div>
    );
  }
}

export default Homepage;
