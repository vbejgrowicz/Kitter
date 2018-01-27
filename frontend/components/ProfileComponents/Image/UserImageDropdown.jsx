import React from 'react';
import PropTypes from 'prop-types';

class UserImageDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }

  componentWillMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    const { dropdown } = this;
    const dropdownPosition = dropdown.getBoundingClientRect();
    if (dropdownPosition.y < 60) {
      this.props.onClose();
    }
  }
  render() {
    return (
      <div>
        <div className="dropdown" ref={(c) => { this.dropdown = c; }}>
          <li className="link" onClick={this.props.clickEvent}>Add a Profile Photo</li>
          <hr />
          <li className="link" onClick={this.props.onClose}>Cancel</li>
        </div>
        <div id="full-screen" onClick={this.props.onClose} />
      </div>
    );
  }
}

UserImageDropdown.propTypes = {
  clickEvent: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UserImageDropdown;
