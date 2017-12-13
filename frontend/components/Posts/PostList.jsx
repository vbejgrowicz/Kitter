import React from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';

class PostList extends React.Component {

  render() {
    const posts = this.props.PostReducer.Posts.map((post) => {
      return <PostItem post={post} key={post._id} />
    });
    return (
      <div id="post-list">
        {posts}
      </div>
    );
  }
}

function mapStateToProps({ PostReducer }) {
  return { PostReducer };
}

export default connect(mapStateToProps, null)(PostList);
