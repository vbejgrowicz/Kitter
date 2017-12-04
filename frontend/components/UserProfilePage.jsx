import React from 'react';

class UserProfilePage extends React.Component {

  render() {
    console.log(this.props.match.params.userName);
    return (
      <div>
        <h1>{this.props.match.params.userName}'s Page </h1>
      </div>
    );
  }
}

export default UserProfilePage;
