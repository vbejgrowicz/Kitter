import React from 'react';
import { connect } from 'react-redux';
import PostList from '../Posts/PostList';
import HomepageNewPost from './HomepageNewPost';
import { fetchPosts } from '../../actions/PostActions';
import { getTotalNumPosts } from '../../utils/apiUtils';

class HomepagePostFeed extends React.Component {

  componentDidMount() {
    const user = this.props.UserReducer;
    this.props.getPosts(user, 'All');
  }

  render() {
    const user = this.props.UserReducer;
    return (
      <div id="profile-feed">
        <HomepageNewPost />
        <PostList
          getPostCount={getTotalNumPosts.bind(this)}
          fetchPosts={this.props.getPosts.bind(this, user, 'All')} />
      </div>
    );
  }
}

function mapStateToProps({ UserReducer }) {
  return { UserReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (user, category) => {
      const id = user.id;
      dispatch(fetchPosts(id, category));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomepagePostFeed);
