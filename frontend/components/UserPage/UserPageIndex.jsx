import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../utils/apiUtils';
import { activeUser } from '../../actions/UserActions';

class UserPageIndex extends React.Component {

  handleSignOut() {
    logOut().then(response => {
      this.props.updateUser(response);
    });
  }

  render() {
    return (
      <div>
        Welcome {this.props.UserReducer.name}!
        <button onClick={this.handleSignOut.bind(this)}>Log out</button>
      </div>
    );
  }
}

function mapStateToProps({ UserReducer }) {
  return { UserReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => {
      dispatch(activeUser(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPageIndex);
