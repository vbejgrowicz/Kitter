import React from 'react';
import { connect } from 'react-redux';
import { findUserPosts } from '../../actions/PostActions';

class UserProfilePage extends React.Component {

  componentDidMount() {
    this.props.fetchPosts(this.props.match.params.username);
  }

  render() {
    // console.log(this.props.PostReducer.isFetching);
    return (
      <div>
        <h1>{this.props.match.params.username}'s Page </h1>
      </div>
    );
  }
}

function mapStateToProps({ PostReducer }) {
  return { PostReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (username) => {
      dispatch(findUserPosts(username));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);
