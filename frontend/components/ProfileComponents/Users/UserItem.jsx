import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FollowButton from '../FollowButton';

function UserItem({ user }) {
  return (
    <li className="user-item">
      <div className="header">
        <Link to={`/${user.username}`}>
          <div className="user-image" />
        </Link>
        <FollowButton user={user} />
      </div>
      <div className="user-data">
        <Link to={`/${user.username}`}>
          <div className="user-name">{user.name}</div>
          <div className="user-username">@{user.username}</div>
        </Link>
      </div>
    </li>
  );
}


UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
