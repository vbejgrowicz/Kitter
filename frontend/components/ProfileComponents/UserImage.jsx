import React from 'react';
import NewUserImageForm from './NewUserImageForm';

class UserImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadImageModal: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      uploadImageModal: !this.state.uploadImageModal,
    });
  }

  render() {
    return (
      <div>
        <div className="user-image" onClick={this.handleClick} />
        {this.state.uploadImageModal && (
          <NewUserImageForm onClose={this.handleClick} />
        )}
      </div>
    );
  }
}

export default UserImage;
