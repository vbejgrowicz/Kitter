import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Search from './HeaderComponents/Search';
import UserButton from './HeaderComponents/UserButton';
import PostButton from './HeaderComponents/PostButton';

function ignoreClose(event) {
  event.stopPropagation();
}
function UserBar({ user }) {
  return (
    <div>
      <div id="nav">
        <div className="link-container">
          <div className="left">
            <NavLink exact to="/">
              <div className="home">
                <i className="fa fa-home" aria-hidden="true" />
              </div>
            </NavLink>
          </div>
          <div className="center">
            <div className="brand-icon" />
          </div>
          <div className="right">
            <Search />
            <UserButton user={user} ignoreClose={ignoreClose} />
            <PostButton ignoreClose={ignoreClose} />
          </div>
        </div>
      </div>
    </div>
  );
}

UserBar.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserBar;
