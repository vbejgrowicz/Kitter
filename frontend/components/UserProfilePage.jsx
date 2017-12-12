import React from 'react';
import { connect } from 'react-redux';
import { getCurrentPosts } from '../actions/PostActions';

class UserProfilePage extends React.Component {

  componentDidMount() {
    this.props.getPosts(this.props.match.params.username);
  }

  render() {
    return (
      <div>
        <h1>{this.props.match.params.username}'s Page </h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (username) => {
      dispatch(getCurrentPosts(username));
    }
  };
};

export default connect(null, mapDispatchToProps)(UserProfilePage);
