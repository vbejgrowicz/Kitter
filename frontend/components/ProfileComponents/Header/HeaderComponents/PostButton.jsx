import React from 'react';
import PropTypes from 'prop-types';
import PostModal from './PostModal';

class PostButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Post: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      Post: !this.state.Post,
    });
  }

  render() {
    return (
      <div>
        <button className="meow" onClick={this.handleClick}>Meow</button>
        {this.state.Post && (
          <PostModal onClose={this.handleClick} ignoreClose={this.props.ignoreClose} />
        )}
      </div>
    );
  }
}

PostButton.propTypes = {
  ignoreClose: PropTypes.func.isRequired,
};

export default PostButton;
