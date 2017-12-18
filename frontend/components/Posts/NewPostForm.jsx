import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-autosize-textarea';
import { newPost } from '../../actions/PostActions';


class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: '',
      focus: this.props.initialFocus,
    };
    this.handleClear = this.handleClear.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleSubmit() {
    this.props.createPost(this.state.post);
    if (this.props.onClose) {
      this.props.onClose();
    } else {
      this.handleClear();
    }
  }

  handleInput(e) {
    this.setState({
      post: e.target.value,
    });
  }

  handleClear() {
    this.setState({
      post: '',
      focus: false,
    });
  }

  handleFocus() {
    this.setState({ focus: true });
  }

  handleBlur() {
    if (this.state.post === '') {
      this.setState({ focus: false });
    }
  }


  render() {
    const focus = this.state.focus ? 'open' : 'closed';
    return (
      <div id="post-form">
        <TextareaAutosize
          value={this.state.post}
          className={focus}
          maxRows={14}
          maxLength="140"
          placeholder="What's happening?"
          onChange={this.handleInput}
          onFocus={this.props.initialFocus ? null : this.handleFocus}
          onBlur={this.props.initialFocus ? null : this.handleBlur}
        />
        <button
          className={focus}
          disabled={!this.state.post}
          onClick={this.handleSubmit}
        >
          Meow
        </button>
      </div>
    );
  }
}

NewPostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  initialFocus: PropTypes.bool.isRequired,
};

NewPostForm.defaultProps = {
  onClose: null,
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => {
      dispatch(newPost(post));
    },
  };
};

export default connect(null, mapDispatchToProps)(NewPostForm);
