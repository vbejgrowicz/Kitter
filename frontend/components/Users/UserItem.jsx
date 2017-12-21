import React from 'react';
import PropTypes from 'prop-types';

function UserItem({ user }) {
  return (
    <li className="user-item">
      USER ITEM
    </li>
  );
}


UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
