import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
class NewUserImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.onDrop = this.onDrop.bind(this);
  onDrop(file) {
    this.setState({ file: file[0] });
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
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => (
  {
    },
  }
);

export default connect(null, mapDispatchToProps)(NewUserImageForm);
