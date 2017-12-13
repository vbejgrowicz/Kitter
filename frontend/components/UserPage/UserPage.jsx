import React from 'react';
import { connect } from 'react-redux';
import { findUserPosts } from '../../actions/PostActions';
import UserProfileCard from './UserProfileCard';
import PostList from '../Posts/PostList';

class UserProfilePage extends React.Component {

  componentDidMount() {
    this.props.fetchPosts(this.props.match.params.username);
  }

  render() {
    // console.log(this.props.PostReducer.isFetching);
    return (
      <div id="user-home-page">
        <div style={{display: "inline-block", width: 230}}>
        {this.props.match.params.username}'s Page
        </div>
        <div id="profile-feed">
          <PostList />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ PostReducer }) {
  return { PostReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (username) => {
      dispatch(findUserPosts(username));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);
