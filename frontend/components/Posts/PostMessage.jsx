import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateMessage } from '../../actions/PostActions';

class PostMessage extends React.Component {
  componentDidMount() {
    this.messageTimeout = setInterval(
      () => this.closeMessage(),
      3000,
    );
    setTimeout(() => this.message.classList.add('open'), 0);
  }

  componentWillUnmount() {
    clearInterval(this.messageTimeout);
    clearInterval(this.removeMessageTimeout);
  }

  closeMessage() {
    this.message.classList.remove('open');
    this.removeMessageTimeout = setInterval(
      () => this.props.removePostMessage(),
      1500,
    );
  }

  render() {
    return (
      <div id="full-screen" onClick={() => this.closeMessage()}>
        <div id="message-container" ref={(c) => { this.message = c; }}>
          <div className="message-box">
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
}

PostMessage.propTypes = {
  text: PropTypes.string.isRequired,
  removePostMessage: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
  {
    removePostMessage: () => {
      dispatch(updateMessage(false, null));
    },
  }
);


export default connect(null, mapDispatchToProps)(PostMessage);
