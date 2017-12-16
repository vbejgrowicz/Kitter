import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/PostActions';
import { findUserPostCount } from '../../actions/UserActions';
import { getNumPosts } from '../../utils/apiUtils';
import PostList from '../Posts/PostList';

class ProfileFeed extends React.Component {

  componentDidMount() {
    const user = this.props.UserReducer;
    this.props.getPosts(user, 'User');
  }

  render() {
    const user = this.props.UserReducer;
    const posts = this.props.PostReducer.posts.list;
    return (
      <div id="profile-feed">
        <PostList
          getPostCount={getNumPosts.bind(this, user.id)}
          fetchPosts={this.props.getPosts.bind(this, user, 'User')} />
      </div>
    );
  }
}

function mapStateToProps({ UserReducer, PostReducer }) {
  return { UserReducer, PostReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (user, category) => {
      dispatch(fetchPosts(user.id, category));
      dispatch(findUserPostCount(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFeed);
