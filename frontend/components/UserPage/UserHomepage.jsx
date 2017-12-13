import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/PostActions';
import UserProfileCard from './UserProfileCard';
import UserProfilePostBox from './UserProfilePostBox';

class UserHomepage extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div id="user-home-page">
        <UserProfileCard />
        <div id="profile-feed">
          <UserProfilePostBox />
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
    fetchPosts: () => {
      dispatch(getPosts());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHomepage);
