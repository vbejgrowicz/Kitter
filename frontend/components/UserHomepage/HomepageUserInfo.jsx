import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function HomepageUserInfo({ UserReducer }) {
  const { username, name, data } = UserReducer;
  return (
    <div id="homepage-user-data">
      <div className="content">
        <div className="user-image" />
        <Link className="account" to={`/${username}`}>
          <div className="name">{name}</div>
          <div className="username">@{username}</div>
        </Link>
        <div className="user-data">
          <Link className="posts data" to={`/${username}`}>
            <div className="title">Meows</div>
            <div className="count">{data.posts}</div>
          </Link>
          <Link className="following data" to={`/${username}/following`}>
            <div className="title">Following</div>
            <div className="count">{data.followers}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

HomepageUserInfo.propTypes = {
  UserReducer: PropTypes.object.isRequired,
};


function mapStateToProps({ UserReducer }) {
  return { UserReducer };
}

export default connect(mapStateToProps, null)(HomepageUserInfo);
