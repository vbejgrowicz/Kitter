import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, addPendingPosts, checkPendingPosts, emptyPostList } from '../../../actions/PostActions';
import { updateUserPostCount } from '../../../actions/UserActions';
import PostItem from './PostItem';
import PostMessage from './PostMessage';
import PostListNotification from './PostListNotification';
import PostListEnd from './PostListEnd';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.handleNewPosts = this.handleNewPosts.bind(this);
  }

  componentWillMount() {
    const { _id } = this.props.UserReducer;
    this.props.getPosts(_id, this.props.category, 'first fetch');
    this.checkForUpdates = setInterval(
      () => this.props.checkPosts(this.props.category, _id),
      30000,
    );
    window.addEventListener('scroll', this.onScroll);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.PostReducer.posts.isLoading) {
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    this.props.removePostList();
    clearInterval(this.checkForUpdates);
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    const { _id } = this.props.UserReducer;
    const { posts } = this.props.PostReducer;
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight + 47) &&
      posts.list.length &&
      !posts.isLoading
    ) {
      const lastPostDate = posts.list[posts.list.length - 1].date;
      this.props.getPosts(_id, this.props.category, lastPostDate);
    }
  }

  handleNewPosts() {
    const { _id } = this.props.UserReducer;
    this.props.getPendingPosts(_id);
  }

  render() {
    const { posts, message } = this.props.PostReducer;
    const { pendingPosts, list } = posts;
    const { status, count } = pendingPosts;
    const postItems = list.map(post => <PostItem post={post} key={post._id} />);

    return posts.total !== null && (
      <div>
        {message.status && (
          <PostMessage text={message.text} />
        )}
        {status && (
          <PostListNotification handleNewPosts={this.handleNewPosts} count={count} />
        )}
        <ul id="post-list">
          {postItems}
        </ul>
        <PostListEnd listLength={list.length} />
      </div>
    );
  }
}

PostList.propTypes = {
  category: PropTypes.string.isRequired,
  getPosts: PropTypes.func.isRequired,
  getPendingPosts: PropTypes.func.isRequired,
  removePostList: PropTypes.func.isRequired,
  checkPosts: PropTypes.func.isRequired,
  UserReducer: PropTypes.object.isRequired,
  PostReducer: PropTypes.object.isRequired,
};

function mapStateToProps({ UserReducer, PostReducer }) {
  return { UserReducer, PostReducer };
}

const mapDispatchToProps = dispatch => (
  {
    getPosts: (id, category, lastPostDate) => {
      dispatch(fetchPosts(id, category, lastPostDate));
    },
    removePostList: () => {
      dispatch(emptyPostList());
    },
    getPendingPosts: (userId) => {
      dispatch(addPendingPosts());
      dispatch(updateUserPostCount(userId));
    },
    checkPosts: (category, userId) => {
      dispatch(checkPendingPosts(category, userId));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
