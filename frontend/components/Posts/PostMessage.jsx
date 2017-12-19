import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateMessage } from '../../actions/PostActions';

class PostMessage extends React.Component {
  componentDidMount() {
    this.messageTimeout = setInterval(
      () => this.props.removePostMessage(),
      3000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.messageTimeout);
    this.props.removePostMessage();
  }

  render() {
    return (
      <div id="message-container">
        <div className="message-box">
          {this.props.text}
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
