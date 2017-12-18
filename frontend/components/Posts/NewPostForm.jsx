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
