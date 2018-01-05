import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewUserImageForm from './NewUserImageForm';
import defaultImage from '../../../assets/images/cat-grey.png';

class UserImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadImageModal: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.canUpdate && (this.props.user.id === this.props.AuthReducer.user.id)) {
      this.setState({
        uploadImageModal: !this.state.uploadImageModal,
      });
    }
  }

  render() {
    return (
      <div>
        <div className="user-image" onClick={this.handleClick}>
          <img className="default" src={defaultImage} alt="" />
        </div>
        {this.state.uploadImageModal && (
          <NewUserImageForm onClose={this.handleClick} />
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
