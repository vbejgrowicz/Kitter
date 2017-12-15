import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HomepageUserInfo extends React.Component {

  render() {
    const { username, name, data } = this.props.UserReducer;
    return (
      <div id="profile-card">
        <div className="content">
          <div className="image">
            <i className="fa fa-user-circle" aria-hidden="true"></i>
          </div>
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
}

function mapStateToProps({ UserReducer }) {
  return { UserReducer };
}

export default connect(mapStateToProps, null)(HomepageUserInfo);
