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
    const { total, pendingPosts } = this.props.PostReducer.posts;
    const { count } = pendingPosts;

    this.props.getPostCount().then((res) => {
      const newPosts = res.count - total;
      if (newPosts > 0 && newPosts !== count) {
        this.props.updatePendingPosts(true, newPosts);
      }
    });
  }

  handleNewPosts() {
    this.props.fetchPosts();
    this.props.updatePendingPosts(false, null);
  }

  render() {
    const { status, count } = this.props.PostReducer.posts.pendingPosts;
    const { list } = this.props.PostReducer.posts;

    const posts = list.map((post) => {
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
