import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutUser } from '../../../actions/AuthActions';

function UserDropdown({
  onClose, ignoreClose, AuthReducer, updateUser,
}) {
  const { username, name } = AuthReducer.user;
  return (
    <div id="user-dropdown" onClick={onClose}>
      <div id="dropdown" onClick={ignoreClose}>
        <ul>
          <li className="user-info" >
            <Link to={`/${username}`} onClick={onClose}>
              <div className="user">
                {name}
                <p className="username">@{username}</p>
              </div>
            </Link>
          </li>
          <hr />
          <li className="profile link">
            <Link to={`/${username}`} onClick={onClose}>
              <div><i className="fa fa-user-o" aria-hidden="true" /> Profile</div>
            </Link>
          </li>
          <hr />
          <li className="logout link" onClick={updateUser}>
            <div>Log Out</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

UserDropdown.propTypes = {
  onClose: PropTypes.func.isRequired,
  ignoreClose: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  AuthReducer: PropTypes.object.isRequired,
};


function mapStateToProps({ AuthReducer }) {
  return { AuthReducer };
}

const mapDispatchToProps = dispatch => (
  {
    updateUser: () => {
      dispatch(logOutUser());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
