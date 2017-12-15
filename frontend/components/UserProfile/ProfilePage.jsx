import React from 'react';
import { connect } from 'react-redux';
import { checkUser } from '../../actions/UserActions';
import ProfileFeed from './ProfileFeed';

class ProfilePage extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.username);
  }

  render() {
    const user = this.props.UserReducer.id;
    const isLoading = this.props.UserReducer.isLoading;

    if (isLoading) {
      return (
        <p>Loading</p>
      );
    }
    return user ? (
      <div id="user-home-page">
        <div style={{display: "inline-block", width: 230}}>
        {this.props.match.params.username}'s Page
        </div>
        <ProfileFeed />
      </div>
    ) : (
      <div>User not found</div>
    );
  }
}

function mapStateToProps({ UserReducer }) {
  return { UserReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (username) => {
      dispatch(checkUser(username));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
