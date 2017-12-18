import React from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import { fetchPosts, addPendingPosts, checkPendingPosts } from '../../actions/PostActions';
import { updateUserPostCount } from '../../actions/UserActions';
import { getNumPosts, getTotalNumPosts } from '../../utils/apiUtils';

class PostList extends React.Component {

  componentDidMount() {
    const user = this.props.UserReducer;
    this.props.getPosts(user.id, this.props.category);
    this.checkForUpdates = setInterval(
      () => this.props.checkPosts(),
      30000
    );
  }

  componentWillUnmount() {
    clearInterval(this.checkForUpdates);
  }

  handleNewPosts() {
    const user = this.props.UserReducer;
    const newPosts = this.props.PostReducer.posts.pendingPosts.list;
    const userPosts = newPosts.filter((post) => post.author.id === user.id);
    this.props.getNewPosts(user);
    this.props.updatePostCount(userPosts.length);
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
    getPosts: (id, category) => {
      dispatch(fetchPosts(id, category));
    },
    getNewPosts: (user) => {
      dispatch(addPendingPosts());
    },
    updatePostCount: (num) => {
      dispatch(updateUserPostCount(num));
    },
    checkPosts: () => {
      dispatch(checkPendingPosts());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
