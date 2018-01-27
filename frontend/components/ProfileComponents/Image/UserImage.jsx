import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserImageDropdown from './UserImageDropdown';
import NewUserImageForm from './NewUserImageForm';
import defaultImage from '../../../../assets/images/cat-grey.png';

class UserImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageModal: false,
      dropdown: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(selected) {
    if (this.props.canUpdate && (this.props.user._id === this.props.AuthReducer.user._id)) {
      if (!this.state[selected]) {
        this.setState({
          imageModal: false,
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
    return (
      <div className="image-container">
        <div className={user.image ? 'user-image user' : 'user-image default'} onClick={() => this.handleClick('dropdown')}>
          <img src={user.image ? (user.image) : (defaultImage)} alt="" />
        </div>
        {this.state.dropdown && (
          <UserImageDropdown onClose={() => this.handleClick('dropdown')} user={this.props.user} clickEvent={() => this.handleClick('imageModal')} />
        )}
        {this.state.imageModal && (
          <NewUserImageForm onClose={() => this.handleClick('imageModal')} user={this.props.user} />
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
