import React from 'react';
import { connect } from 'react-redux'
import '../../../assets/stylesheets/NavBar/MeowModal.scss';
import { newPost } from '../../actions/PostActions';


class MeowModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: 'More Data',
    };
  }

  handleSubmit() {
    this.props.createPost(this.state.post);
    this.props.onClose();
  }

  render() {
    return (
      <div id="meow-modal" onClick={this.props.onClose}>
        <div id="modal" onClick={this.props.ignoreClose}>
          MEOW Modal
          <button onClick={this.handleSubmit.bind(this)}>Meow</button>
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
