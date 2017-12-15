import React from 'react';
import { connect } from 'react-redux';
import PostList from '../Posts/PostList';
import HomepageNewPost from './HomepageNewPost';
import { fetchPosts } from '../../actions/PostActions';

class HomepagePostFeed extends React.Component {

  componentDidMount() {
    const user = this.props.UserReducer;
    this.props.getPosts(user, 'All');
  }

  // ADD function to get num of post by followers

  render() {
    const user = this.props.UserReducer;
    const posts = this.props.PostReducer.posts.list;
    return (
      <div id="profile-feed">
        <HomepageNewPost />
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
    getPosts: (user, category) => {
      const id = user.id;
      dispatch(fetchPosts(id, category));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomepagePostFeed);
