import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserImageDropdown from './UserImageDropdown';
import NewUserImageForm from './NewUserImageForm';
import ImageDeleteModal from './ImageDeleteModal';
import defaultImage from '../../../../assets/images/cat-grey.png';

class UserImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadImage: false,
      removeImage: false,
      dropdown: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(selected) {
    if (this.props.canUpdate && (this.props.user._id === this.props.AuthReducer.user._id)) {
      if (!this.state[selected]) {
        this.setState({
          uploadImage: false,
          removeImage: false,
          dropdown: false,
        });
      }
      this.setState({
        [selected]: !this.state[selected],
      });
    }
  }


  render() {
    const { user } = this.props;
    const hasImage = user.image !== null;
    return (
      <div className="image-container">
        <div className={user.image ? 'user-image user' : 'user-image default'} onClick={() => this.handleClick('dropdown')}>
          <img src={user.image ? (user.image) : (defaultImage)} alt="" />
        </div>
        {this.state.dropdown && (
          <UserImageDropdown onClose={() => this.handleClick('dropdown')} hasImage={hasImage} clickEvent={this.handleClick} />
        )}
        {this.state.uploadImage && (
          <NewUserImageForm onClose={() => this.handleClick('uploadImage')} user={this.props.user} />
        )}
        {this.state.removeImage && (
          <ImageDeleteModal onClose={() => this.handleClick('removeImage')} user={this.props.user} />
        )}
      </div>
    );
  }
}

UserImage.defaultProps = {
  canUpdate: false,
};

UserImage.propTypes = {
  user: PropTypes.object.isRequired,
  canUpdate: PropTypes.bool,
  AuthReducer: PropTypes.object.isRequired,
};

function mapStateToProps({ AuthReducer }) {
  return { AuthReducer };
}

export default connect(mapStateToProps, null)(UserImage);
