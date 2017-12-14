import React from 'react';
import { connect } from 'react-redux';
import { checkUser } from '../../actions/UserProfileActions';
import UserProfileCard from './UserProfileCard';
import UserProfileFeed from './UserProfileFeed';

class UserPage extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.username);
  }

  render() {
    const user = this.props.UserProfileReducer.user.id;
    const isLoading = this.props.UserProfileReducer.user.isLoading;

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
        <UserProfileFeed />
      </div>
    ) : (
      <div>User not found</div>
    );
  }
}

function mapStateToProps({ UserProfileReducer }) {
  return { UserProfileReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (username) => {
      dispatch(checkUser(username));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
