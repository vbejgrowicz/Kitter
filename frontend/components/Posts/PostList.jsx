import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/PostActions';
import PostItem from './PostItem';

class PostList extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const posts = this.props.PostReducer.Posts.map((post) => {
      return <PostItem post={post} key={post._id} />
    });
    return (
      <ul id="post-list">
        {posts}
      </ul>
    );
  }
}

function mapStateToProps({ PostReducer }) {
  return { PostReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {
      dispatch(getPosts());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
