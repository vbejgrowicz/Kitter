import React from 'react';
import PropTypes from 'prop-types';

function Message({ text }) {
  return (
    <div id="message-container">
      <div className="message-box">
        {text}
      </div>
    </div>
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
