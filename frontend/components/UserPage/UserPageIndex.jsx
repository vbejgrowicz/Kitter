import React from 'react';
import { connect } from 'react-redux';

class UserPageIndex extends React.Component {

  render() {
    return (
      <div>
        Welcome {this.props.UserReducer.name}!
      </div>
    );
  }
}

function mapStateToProps({ UserReducer }) {
  return { UserReducer };
}

export default connect(mapStateToProps, null)(UserPageIndex);
