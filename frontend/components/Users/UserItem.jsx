import React from 'react';
import PropTypes from 'prop-types';

function UserItem({ user }) {
  return (
    <li className="user-item">
      {user.name}
    </li>
  );
}


UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
