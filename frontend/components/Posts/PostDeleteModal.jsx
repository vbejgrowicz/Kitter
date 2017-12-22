import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/PostActions';
import PostItem from './PostItem';

class PostDeleteModal extends React.Component {
  componentDidMount() {
    this.cancelBtn.focus();
  }

  render() {
    const {
      post,
      onClose,
      ignoreClose,
      removePost,
    } = this.props;
    return (
      <div id="post-delete-modal" role="presentation" onClick={onClose}>
        <div id="modal" role="presentation" onClick={ignoreClose}>
          <div className="title">Are you sure you want to delete this Meow?</div>
          <div className="close" onClick={onClose}>&times;</div>
          <ul className="post-container">
            <PostItem post={post} />
          </ul>
          <div className="buttons-container">
            <button
              className="cancel"
              ref={(c) => { this.cancelBtn = c; }}
              onClick={onClose}
            >
              Cancel
            </button>
            <button className="delete" onClick={() => removePost(post)}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

PostDeleteModal.propTypes = {
  post: PropTypes.object.isRequired,
  removePost: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  ignoreClose: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
  {
    removePost: (post) => {
      dispatch(deletePost(post));
    },
  }
);

export default connect(null, mapDispatchToProps)(PostDeleteModal);
