import React from 'react';
import { connect } from 'react-redux';
import PostList from '../Posts/PostList';
import HomepageNewPost from './HomepageNewPost';
import { findAllPosts } from '../../actions/PostActions';

class HomepagePostFeed extends React.Component {

  componentDidMount() {
    const userId = this.props.UserReducer.id;
    this.props.getPosts(userId);
  }

  render() {
    const posts = this.props.PostReducer.posts.list;
    return (
      <div id="profile-feed">
        <HomepageNewPost />
        <PostList posts={posts}/>
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
      dispatch(findAllPosts(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomepagePostFeed);
