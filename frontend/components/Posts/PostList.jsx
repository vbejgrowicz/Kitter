import React from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import { findUserPostCount } from '../../actions/UserActions';
import { setPendingPosts, fetchPosts, addPendingPosts } from '../../actions/PostActions';
import { getNumPosts, getTotalNumPosts } from '../../utils/apiUtils';

class PostList extends React.Component {

  componentDidMount() {
    const user = this.props.UserReducer;
    this.props.getPosts(user.id, this.props.category);
    this.checkForUpdates = setInterval(
      () => this.updatePosts(),
      30000
    );
  }

  componentWillUnmount() {
    clearInterval(this.checkForUpdates);
  }

  updatePosts() {
    const { total, pendingPosts } = this.props.PostReducer.posts;
    const { count } = pendingPosts;
    const user = this.props.UserReducer;
    this.getPostCount(this.props.category, user.id).then((res) => {
      const newPosts = res.count - total;
      if (newPosts > 0 && newPosts !== count) {
        this.props.updatePendingPosts(true, newPosts, this.props.category);
      }
    });
  }

  getPostCount(category, userId) {
    if (category === 'All') {
      return getTotalNumPosts();
    } else {
      return getNumPosts(userId);
    }
  }

  handleNewPosts() {
    const user = this.props.UserReducer;
    this.props.getNewPosts(user);
  }

  render() {
    const { pendingPosts, list } = this.props.PostReducer.posts;
    const { status, count } = pendingPosts;

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
    updatePendingPosts: (status, count, category) => {
      dispatch(setPendingPosts(status, count, category));
    },
    getPosts: (id, category) => {
      dispatch(fetchPosts(id, category));
    },
    updatePostCount: (user) => {
      dispatch(findUserPostCount(user));
    getNewPosts: (user) => {
      dispatch(addPendingPosts());
    },
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
