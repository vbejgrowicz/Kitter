import React from 'react';
import { connect } from 'react-redux'
import '../../../assets/stylesheets/NavBar/MeowModal.scss';
import { newPost } from '../../actions/PostActions';


class MeowModal extends React.Component {
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
      <div id="meow-modal" onClick={this.props.onClose}>
        <div id="modal" onClick={this.props.ignoreClose}>
          <div className="title">Compose new Meow</div>
          <div className="close" onClick={this.props.onClose}>&times;</div>
          <div className="post-container">
            <textarea maxLength="140" placeholder="What's happening?" onChange={this.handleInput.bind(this)} />
            <button disabled={!this.state.post} onClick={this.handleSubmit.bind(this)}>Meow</button>
          </div>
        </div>
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

export default connect(null, mapDispatchToProps)(MeowModal);
