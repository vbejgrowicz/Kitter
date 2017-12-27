import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostItem from './PostItem';

function ignoreClose(event) {
  event.stopPropagation();
}

class PostDetailPage extends React.Component {
  onItemClose(post) {
    this.context.router.history.push(`/${post.author.username}`);
  }

  render() {
    const { postID } = this.props.match.params;
    const { list } = this.props.PostReducer.posts;
    const post = list.find(item => item._id === postID);

    return post ? (
      <div id="post-detail-page">
        <div id="full-screen" onClick={() => this.onItemClose(post)}>
          <div id="modal" onClick={ignoreClose}>
            <PostItem post={post} onItemClick={() => {}} />
          </div>
        </div>
      </div>
    ) : (
      null
    );
  }
}

PostDetailPage.propTypes = {
  match: PropTypes.object.isRequired,
  PostReducer: PropTypes.object.isRequired,
};

PostDetailPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

function mapStateToProps({ PostReducer }) {
  return { PostReducer };
}

export default connect(mapStateToProps, null)(PostDetailPage);
