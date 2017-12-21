import React from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';

class UserList extends React.Component {
  componentWillMount() {
    console.log(this.props.category);
  }

  render() {
    return (
      <div>
        <ul id="user-list">
          USER ITEMS
        </ul>
      </div>
    );
  }
}

UserList.propTypes = {
  category: PropTypes.string.isRequired,
};

export default UserList;
