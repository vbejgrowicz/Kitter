import React from 'react';
import { connect } from 'react-redux';
import { checkUser } from '../../actions/UserProfileActions';
import UserProfileCard from './UserProfileCard';
import PostList from '../Posts/PostList';

class UserPage extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.username);
  }

  render() {
    return (
      <div id="user-home-page">
        <div style={{display: "inline-block", width: 230}}>
        {this.props.match.params.username}'s Page
        </div>
        <div id="profile-feed">
          <PostList />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ PostReducer }) {
  return { PostReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (username) => {
      dispatch(checkUser(username));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
