import React from 'react';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions/AuthActions';

class UserPageIndex extends React.Component {

  handleClick() {
    this.props.updateUser();
  }

  render() {
    return (
      <div>
        Welcome {this.props.AuthReducer.name}!
        <button onClick={this.handleClick.bind(this)}>Log out</button>
      </div>
    );
  }
}

function mapStateToProps({ AuthReducer }) {
  return { AuthReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => {
      dispatch(logOutUser());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPageIndex);
