import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/PostActions';

class UserPageIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const user = this.props.AuthReducer;
    return (
      <div id="user-home-page">
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
        <div id="profile-feed">Profile Feed</div>
      </div>
    );
  }
}

function mapStateToProps({ PostReducer, AuthReducer }) {
  return { PostReducer, AuthReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {
      dispatch(getPosts());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPageIndex);
