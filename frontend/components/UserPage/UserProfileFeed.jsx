import React from 'react';
import { connect } from 'react-redux';
import { findPosts } from '../../actions/UserProfileActions';
import PostList from '../Posts/PostList';

class UserProfileFeed extends React.Component {

  componentDidMount() {
    const userId = this.props.UserProfileReducer.user.id;
    this.props.getPosts(userId);
  }

  render() {
    const posts = this.props.UserProfileReducer.posts.list;
    return (
      <div id="profile-feed">
        <PostList posts={posts} />
      </div>
    );
  }
}

function mapStateToProps({ UserProfileReducer }) {
  return { UserProfileReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (id) => {
      dispatch(findPosts(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileFeed);
