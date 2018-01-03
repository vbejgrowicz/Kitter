import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, addPendingPosts, checkPendingPosts } from '../../actions/PostActions';
import { updateUserPostCount } from '../../actions/UserActions';
import PostItem from './PostItem';
import PostMessage from './PostMessage';


class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }

  componentWillMount() {
    const { id } = this.props.UserReducer;
    this.props.getPosts(id, this.props.category);
    this.checkForUpdates = setInterval(
      () => this.props.checkPosts(this.props.category, id),
      30000,
    );
    window.addEventListener('scroll', this.onScroll);
  }

  shouldComponentUpdate(nextProps) {
    if (
      (this.props.PostReducer.posts.total === nextProps.PostReducer.posts.total) &&
      (nextProps.PostReducer.posts.isLoading)
    ) {
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.checkForUpdates);
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    const { id } = this.props.UserReducer;
    const { posts } = this.props.PostReducer;
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight + 47) &&
      posts.list.length &&
      !posts.isLoading
    ) {
      this.props.getPosts(id, this.props.category, posts.currentCount + posts.pendingPosts.count);
    }
  }

  handleNewPosts() {
    const { id } = this.props.UserReducer;
    this.props.getPendingPosts(id);
  }

  render() {
    const { posts, message } = this.props.PostReducer;
    const { pendingPosts, list } = posts;
    const { status, count } = pendingPosts;
    const postItems = list.map(post => <PostItem post={post} key={post._id} />);

    return !posts.isLoading && (
      <div>
        {message.status && (
          <PostMessage text={message.text} />
        )}
        {status ? (
          <div onClick={() => this.handleNewPosts()}>See {count} new Meow</div>
        ) : (
          null
        )}
        <ul id="post-list">
          {postItems}
        </ul>
      </div>
    );
  }
}

PostList.propTypes = {
  category: PropTypes.string.isRequired,
  getPosts: PropTypes.func.isRequired,
  getPendingPosts: PropTypes.func.isRequired,
  checkPosts: PropTypes.func.isRequired,
  UserReducer: PropTypes.object.isRequired,
  PostReducer: PropTypes.object.isRequired,
};

function mapStateToProps({ UserReducer, PostReducer }) {
  return { UserReducer, PostReducer };
}

const mapDispatchToProps = dispatch => (
  {
    getPosts: (id, category, listLength) => {
      dispatch(fetchPosts(id, category, listLength));
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
