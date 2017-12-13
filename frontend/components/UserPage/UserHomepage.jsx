import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/PostActions';
import UserProfileCard from './UserProfileCard';
import NewPostForm from '../Posts/NewPostForm';

class UserHomepage extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div id="user-home-page">
        <UserProfileCard />
        <div id="profile-feed">
          <div id="homepage-post-box">
            <div>
            </div>
            <NewPostForm initialFocus={false} />
          </div>

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
