import React from 'react';
import { connect } from 'react-redux';
import PostList from '../Posts/PostList';
import HomepageNewPost from './HomepageNewPost';

class HomepagePostFeed extends React.Component {

  componentDidMount() {
    // const userId = this.props.UserProfileReducer.user.id;
    // this.props.getPosts(userId);
  }

  render() {
    // const posts = this.props.UserProfileReducer.posts.list;
    return (
      <div id="profile-feed">
        <HomepageNewPost />
        <PostList />
      </div>
    );
  }
}

function mapStateToProps({ UserProfileReducer }) {
  return { UserProfileReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomepagePostFeed);
