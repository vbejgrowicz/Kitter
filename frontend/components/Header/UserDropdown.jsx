import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutUser } from '../../actions/AuthActions';

class UserDropdown extends React.Component {

  render() {
    const { username, name} = this.props.AuthReducer.user;
    return (
      <div id="user-dropdown" onClick={this.props.onClose}>
        <div id="dropdown" onClick={this.props.ignoreClose}>
          <ul>
            <li className="user-info" >
              <Link to={`/${username}`} onClick={this.props.onClose}>
                <div className="user">
                  {name}
                  <p className="username">@{username}</p>
                </div>
              </Link>
            </li>
            <hr />
            <li className="profile link">
              <Link to={`/${username}`} onClick={this.props.onClose}>
              <div><i className="fa fa-user-o" aria-hidden="true"></i> Profile</div>
            </Link>
            </li>
            <hr />
            <li className="logout link" onClick={this.props.updateUser}>
              <div>Log Out</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ AuthReducer }) {
  return { AuthReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: () => {
      dispatch(logOutUser());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
