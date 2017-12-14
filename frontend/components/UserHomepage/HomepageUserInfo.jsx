import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HomepageUserInfo extends React.Component {

  render() {
    const user = this.props.AuthReducer;
    return (
      <div id="profile-card">
        <div className="content">
          <div className="image">
            <i className="fa fa-user-circle" aria-hidden="true"></i>
          </div>
          <Link className="account" to={`/${user.username}`}>
            <div className="name">{user.name}</div>
            <div className="username">@{user.username}</div>
          </Link>
          <div className="user-data">
            <Link className="posts data" to={`/${user.username}`}>
              <div className="title">Meows</div>
              <div className="count">0</div>
            </Link>
            <Link className="following data" to={`/${user.username}/following`}>
              <div className="title">Following</div>
              <div className="count">0</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ AuthReducer }) {
  return { AuthReducer };
}

export default connect(mapStateToProps, null)(HomepageUserInfo);
