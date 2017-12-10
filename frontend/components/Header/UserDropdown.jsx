import React from 'react';

class UserDropdown extends React.Component {

  render() {
    return (
      <div onClick={this.props.onClose}>
        <div onClick={this.props.ignoreClose}>
          User
        </div>
      </div>
    );
  }
}

export default UserDropdown;
