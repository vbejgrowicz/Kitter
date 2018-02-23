import React from 'react';
import PropTypes from 'prop-types';
import UserImage from '../../Image/UserImage';
import UserDropdown from './UserDropdown';

class UserButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      User: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      User: !this.state.User,
    });
  }

  render() {
    return (
      <div>
        <div onClick={this.handleClick}>
          <UserImage user={this.props.user} />
        </div>
        {this.state.User && (
          <UserDropdown onClose={this.handleClick} ignoreClose={this.props.ignoreClose} />
        )}
      </div>
    );
  }
}

UserButton.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserButton;
