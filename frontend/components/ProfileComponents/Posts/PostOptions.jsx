import React from 'react';
import PropTypes from 'prop-types';
import PostDeleteModal from './PostDeleteModal';

function ignoreClose(event) {
  event.stopPropagation();
}

class PostOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteModal: false,
    };
  }

  handleClick(selected) {
    this.setState({
      [selected]: !this.state[selected],
    });
  }

  render() {
    return (
      <div id="post-options">
        <div className="toggleModal" onClick={() => this.handleClick('deleteModal')}>&times;</div>
        {this.state.deleteModal && (
          <PostDeleteModal post={this.props.post} onClose={() => this.handleClick('deleteModal')} ignoreClose={ignoreClose} />
        )}
      </div>
    );
  }
}


PostOptions.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostOptions;
