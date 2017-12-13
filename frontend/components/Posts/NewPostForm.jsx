import React from 'react';
import { connect } from 'react-redux'
import TextareaAutosize from 'react-autosize-textarea';
import { newPost } from '../../actions/PostActions';


class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: '',
      focus: this.props.initialFocus,
    };
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleSubmit() {
    this.props.createPost(this.state.post);
    this.props.onClose();
  }

  handleInput(e) {
    this.setState({
      post: e.target.value
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
          className={focus}
          maxRows={14}
          maxLength="140"
          placeholder="What's happening?"
          onChange={this.handleInput.bind(this)}
          onFocus={this.props.initialFocus ? null : this.handleFocus.bind(this)}
          onBlur={this.props.initialFocus ? null : this.handleBlur.bind(this)}
        />
        <button className={focus} disabled={!this.state.post} onClick={this.handleSubmit.bind(this)}>Meow</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => {
      dispatch(newPost(post));
    },
  };
};

export default connect(null, mapDispatchToProps)(NewPostForm);
