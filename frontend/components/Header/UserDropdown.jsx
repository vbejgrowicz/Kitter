import React from 'react';

class UserDropdown extends React.Component {

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div>
        Name
      </div>
    );
  }
}

export default UserDropdown;
