import React from 'react';
import PropTypes from 'prop-types';
import NewPostForm from '../Posts/NewPostForm';

function PostModal({ onClose, ignoreClose }) {
  return (
    <div id="post-modal" onClick={onClose}>
      <div id="modal" onClick={ignoreClose}>
        <div className="title">Compose new Meow</div>
        <div className="close" onClick={onClose}>&times;</div>
        <div className="post-container">
          <NewPostForm onClose={onClose} initialFocus />
        </div>
      </div>
    </div>
  );
}

PostModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  ignoreClose: PropTypes.func.isRequired,
};

export default PostModal;
