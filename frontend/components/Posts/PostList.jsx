import React from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import { setPendingPosts, fetchPosts } from '../../actions/PostActions';
import { findUserPostCount } from '../../actions/UserActions';
import { getNumPosts, getTotalNumPosts } from '../../utils/apiUtils';

class PostList extends React.Component {

  componentDidMount() {
    const user = this.props.UserReducer;
    this.props.getPosts(user, this.props.category);

    this.checkForUpdates = setInterval(
      () => this.countNewPosts(),
      30000
    );
  }

  componentWillUnmount() {
    clearInterval(this.checkForUpdates);
  }

  countNewPosts() {
    const { total, pendingPosts, category } = this.props.PostReducer.posts;
    const { id } = this.props.UserReducer;
    const { count } = pendingPosts;

    if (category === 'All') {
      getTotalNumPosts().then((res) => {
        const newPosts = res.count - total;
        if (newPosts > 0 && newPosts !== count) {
          this.props.updatePendingPosts(true, newPosts);
        }
      })
    } else {
      getNumPosts(id).then((res) => {
        const newPosts = res.count - total;
        if (newPosts > 0 && newPosts !== count) {
          this.props.updatePendingPosts(true, newPosts);
        }
      })
    }
  }

  handleNewPosts() {
    const user = this.props.UserReducer;
    this.props.getPosts(user, this.props.category);
    this.props.updatePostCount(user);
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

function mapStateToProps({ UserReducer, PostReducer }) {
  return { UserReducer, PostReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePendingPosts: (status, count) => {
      dispatch(setPendingPosts(status, count));
    },
    getPosts: (user, category) => {
      dispatch(fetchPosts(user.id, category));
    },
    updatePostCount: (user) => {
      dispatch(findUserPostCount(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
