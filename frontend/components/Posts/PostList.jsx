import React from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import { setPendingPosts } from '../../actions/PostActions';

class PostList extends React.Component {

  componentDidMount() {
    this.checkForUpdates = setInterval(
      () => this.countNewPosts(),
      30000
    );
  }

  componentWillUnmount() {
    clearInterval(this.checkForUpdates);
  }

  countNewPosts() {
    this.props.getNumPosts().then((res) => {
      const numOfNewPosts = res.count - this.props.postCount;
      const { count } = this.props.PostReducer.posts.pendingPosts;
      if (numOfNewPosts > 0 && numOfNewPosts !== count) {
        this.props.updatePendingPosts(true, numOfNewPosts);
      }
    });
  }

  handleNewPosts() {
    this.props.updatePosts();
    this.props.updatePendingPosts(false, null);
  }

  render() {
    const { status, count } = this.props.PostReducer.posts.pendingPosts;
    const posts = this.props.posts.map((post) => {
      return <PostItem post={post} key={post._id} />
    });
    return (
      <div>
        {status ? (
          <div onClick={this.handleNewPosts.bind(this)}>See {count} new Meow</div>
        ):(
          null
        )}
        <ul id="post-list">
          {posts}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ PostReducer }) {
  return { PostReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePendingPosts: (status, count) => {
      dispatch(setPendingPosts(status, count));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
