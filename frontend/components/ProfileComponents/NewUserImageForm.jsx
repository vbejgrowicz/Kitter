import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { addUserImage } from '../../actions/AuthActions';

class NewUserImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.onDrop = this.onDrop.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onDrop(file) {
    this.setState({ file: file[0] });
  }

  handleClick() {
    const formData = new FormData();
    formData.append('photo', this.state.file);
    this.props.uploadImage(formData, this.props.user);
  }

  render() {
    return (
      <div id="user-image-modal">
        <div className="modal">
          <Dropzone
            name="file"
            className="image-drop"
            accept="image/jpeg, image/png"
            multiple={false}
            onDrop={this.onDrop}
          >
            {this.state.file ? (
              <img src={this.state.file.preview} alt="" />
            ) : (
              <p className="text">Drop a file here or select a file to upload</p>
            )
            }
          </Dropzone>
          <button onClick={this.handleClick}>Upload</button>
        </div>
      </div>
    );
  }
}

NewUserImageForm.propTypes = {
  user: PropTypes.object.isRequired,
  uploadImage: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
  {
    uploadImage: (imageData, user) => {
      dispatch(addUserImage(imageData, user));
    },
  }
);

export default connect(null, mapDispatchToProps)(NewUserImageForm);
