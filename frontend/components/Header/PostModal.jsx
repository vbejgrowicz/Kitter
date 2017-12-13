import React from 'react';
import { connect } from 'react-redux'
import NewPostForm from '../Posts/NewPostForm';

class PostModal extends React.Component {

  render() {
    return (
      <div id="post-modal" onClick={this.props.onClose}>
        <div id="modal" onClick={this.props.ignoreClose}>
          <div className="title">Compose new Meow</div>
          <div className="close" onClick={this.props.onClose}>&times;</div>
          <div className="post-container">
            <NewPostForm onClose={this.props.onClose} initialFocus={true} />
          </div>
        </div>
      </div>
    );
  }
}


export default PostModal;
