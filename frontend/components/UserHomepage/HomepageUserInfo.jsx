import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserImage from '../ProfileComponents/Image/UserImage';

function HomepageUserInfo({ user }) {
  const { username, name, data } = user;
  return (
    <div id="homepage-user-data">
      <div className="content">
        <UserImage canUpdate user={user} />
        <Link className="account" to={`/${username}`}>
          <div className="name">{name}</div>
          <div className="username">@{username}</div>
        </Link>
        <div className="user-data">
          <Link className="posts data" to={`/${username}`}>
            <div className="title">Meows</div>
            <div className="count">{data.posts}</div>
          </Link>
          {data.follows.following > 0 && (
            <Link className="following data" to={`/${username}/following`}>
              <div className="title">Following</div>
              <div className="count">{data.follows.following}</div>
            </Link>
          )}
          {data.follows.followers > 0 && (
            <Link className="followers data" to={`/${username}/followers`}>
              <div className="title">Followers</div>
              <div className="count">{data.follows.followers}</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

HomepageUserInfo.propTypes = {
  user: PropTypes.object.isRequired,
};

export default HomepageUserInfo;
