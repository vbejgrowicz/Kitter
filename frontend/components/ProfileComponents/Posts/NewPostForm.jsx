import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Textarea from 'react-textarea-autosize';
import { newPost } from '../../../actions/PostActions';


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
    const { total, category } = this.props.PostReducer.posts;
    const user = this.props.UserReducer;

    this.props.createPost(this.state.post, category, user, total);
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
    if (!this.props.initialFocus && !this.state.focus) {
      this.setState({ focus: true });
    }
  }

  handleBlur() {
    if (this.state.post === '' && !this.props.initialFocus) {
      this.setState({ focus: false });
    }
  }

  render() {
    const modalClass = this.state.focus ? 'open meow' : 'closed meow';
    const rows = modalClass === 'open meow' ? 4 : 1;
    return (
      <div id="post-form">
        <Textarea
          value={this.state.post}
          className={modalClass}
          minRows={rows}
          maxRows={15}
          maxLength="140"
          placeholder="What's happening?"
          onChange={this.handleInput}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <button
          className={modalClass}
          disabled={!this.state.post.trim()}
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
  UserReducer: PropTypes.object.isRequired,
  PostReducer: PropTypes.object.isRequired,
};

NewPostForm.defaultProps = {
  onClose: null,
};

function mapStateToProps({ PostReducer, UserReducer }) {
  return { PostReducer, UserReducer };
}

const mapDispatchToProps = dispatch => (
  {
    createPost: (post, category, user, postCount) => {
      dispatch(newPost(post, category, user, postCount));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(NewPostForm);
