import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUserImage } from '../../../actions/AuthActions';

function ignoreClose(event) {
  event.stopPropagation();
}

class ImageDeleteModal extends React.Component {
  componentDidMount() {
    this.cancelBtn.focus();
  }

  render() {
    const {
      user,
      onClose,
      updateImage,
    } = this.props;
    return (
      <div id="delete-modal" role="presentation" onClick={onClose}>
        <div id="modal" role="presentation" onClick={ignoreClose}>
          <div className="title">Are you sure you want to remove your profile photo?</div>
          <div className="close" onClick={onClose}>&times;</div>
          <div className="buttons-container">
            <button
              className="cancel"
              ref={(c) => { this.cancelBtn = c; }}
              onClick={onClose}
            >
              Cancel
            </button>
            <button className="delete" onClick={() => updateImage(user)}>Remove</button>
          </div>
        </div>
      </div>
    );
  }
}

ImageDeleteModal.propTypes = {
  user: PropTypes.object.isRequired,
  updateImage: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
  {
    updateImage: (user) => {
      dispatch(updateUserImage(user));
    },
  }
);

export default connect(null, mapDispatchToProps)(ImageDeleteModal);
