import React from 'react';
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
        <div className="close" onClick={() => this.handleClick('deleteModal')}>&times;</div>

        {this.state.deleteModal && (
          <PostDeleteModal post={this.props.post} onClose={() => this.handleClick('deleteModal')} ignoreClose={ignoreClose} />
        )}
      </div>
    );
  }
}

export default PostOptions;
