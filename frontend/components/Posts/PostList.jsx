import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { fetchPosts, addPendingPosts, checkPendingPosts } from '../../actions/PostActions';
import { updateUserPostCount } from '../../actions/UserActions';
import PostItem from './PostItem';
import PostDetailPage from './PostDetailPage';
import PostMessage from './PostMessage';


class PostList extends React.Component {
  componentWillMount() {
    const { id } = this.props.UserReducer;
    this.props.getPosts(id, this.props.category);
    this.checkForUpdates = setInterval(
      () => this.props.checkPosts(this.props.category, id),
      30000,
    );
  }

  shouldComponentUpdate(nextProps) {
    if ((this.props.PostReducer === nextProps.PostReducer) && (this.props.UserReducer.id === nextProps.UserReducer.id)) {
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.checkForUpdates);
  }

  handleNewPosts() {
    const { id } = this.props.UserReducer;
    this.props.getPendingPosts(id);
  }

  render() {
    const { posts, message } = this.props.PostReducer;
    const { pendingPosts, list } = posts;
    const { status, count } = pendingPosts;
    const postItems = list.map(post => <PostItem post={post} key={post._id} onItemClick={this.props.onItemClick} />);

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
          <Route exact path="/:username/status/:postID" component={PostDetailPage} />
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
  onItemClick: PropTypes.func.isRequired,
};

function mapStateToProps({ UserReducer, PostReducer }) {
  return { UserReducer, PostReducer };
}

const mapDispatchToProps = dispatch => (
  {
    getPosts: (id, category) => {
      dispatch(fetchPosts(id, category));
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
