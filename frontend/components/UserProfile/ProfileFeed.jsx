import React from 'react';
import { connect } from 'react-redux';
import { findUserPosts } from '../../actions/PostActions';
import PostList from '../Posts/PostList';

class ProfileFeed extends React.Component {

  componentDidMount() {
    const userId = this.props.UserReducer.id;
    this.props.getPosts(userId);
  }

  render() {
    const posts = this.props.PostReducer.posts.list;
    return (
      <div id="profile-feed">
        <PostList posts={posts} />
      </div>
    );
  }
}

function mapStateToProps({ UserReducer, PostReducer }) {
  return { UserReducer, PostReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (id) => {
      dispatch(findUserPosts(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFeed);
