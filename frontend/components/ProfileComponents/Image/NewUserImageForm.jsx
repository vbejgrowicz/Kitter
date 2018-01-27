import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { addUserImage } from '../../../actions/AuthActions';

function ignoreClose(event) {
  event.stopPropagation();
}

class NewUserImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.onDrop = this.onDrop.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
  }

  onDrop(file) {
    this.setState({ file: file[0] });
  }

  onDragLeave() {
    this.setState({ file: null });
  }

  handleClick() {
    const formData = new FormData();
    formData.append('photo', this.state.file);
    this.props.uploadImage(formData, this.props.user);
  }

  render() {
    return (
      <div id="user-image-modal" onClick={this.props.onClose}>
        <div className="modal" onClick={ignoreClose}>
          <div className="title">Add a Profile Photo</div>
          <Dropzone
            name="file"
            className="image-drop"
            accept="image/jpeg, image/png"
            multiple={false}
            onDrop={this.onDrop}
            onDragLeave={this.onDragLeave}
          >
            {this.state.file ? (
              <img src={this.state.file.preview} alt="" />
            ) : (
              <p className="text">Select a photo to upload or drag and drop it here</p>
            )
            }
          </Dropzone>
          <button className="cancel" onClick={this.props.onClose}>Cancel</button>
          <button
            className="upload"
            onClick={this.handleClick}
            disabled={!this.state.file}
          >
            Upload
          </button>
        </div>
      </div>
    );
  }
}

NewUserImageForm.propTypes = {
  user: PropTypes.object.isRequired,
  uploadImage: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
  {
    uploadImage: (imageData, user) => {
      dispatch(addUserImage(imageData, user));
    },
  }
);

export default connect(null, mapDispatchToProps)(NewUserImageForm);
