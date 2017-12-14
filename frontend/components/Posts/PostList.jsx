import React from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';

class PostList extends React.Component {

  render() {
    const posts = this.props.posts.map((post) => {
      return <PostItem post={post} key={post._id} />
    });
    return (
      <ul id="post-list">
        {posts}
      </ul>
    );
  }
}

export default PostList;
