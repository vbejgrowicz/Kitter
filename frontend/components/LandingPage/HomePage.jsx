import React from 'react';
import { connect } from 'react-redux';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        Home
      </div>
    );
  }
}

function mapStateToProps({ UserReducer }) {
  return { UserReducer };
}

export default connect(mapStateToProps, null)(HomePage);
