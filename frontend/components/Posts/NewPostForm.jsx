import React from 'react';
import { connect } from 'react-redux'
import TextareaAutosize from 'react-autosize-textarea';
import { newPost } from '../../actions/PostActions';


class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: '',
    };
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

  render() {
    return (
      <div id="post-form">
        <TextareaAutosize maxRows={14} rows={3} maxLength="140" placeholder="What's happening?" onChange={this.handleInput.bind(this)}  />
        <button disabled={!this.state.post} onClick={this.handleSubmit.bind(this)}>Meow</button>
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
