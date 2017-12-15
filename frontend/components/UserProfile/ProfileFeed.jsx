import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/PostActions';
import { getNumPosts } from '../../utils/apiUtils';
import PostList from '../Posts/PostList';

class ProfileFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.UserReducer.id,
      newPosts: null,
      postCount: this.props.UserReducer.data.posts
    };
  }

  componentDidMount() {
    this.props.getPosts(this.state.userId, 'User');
    this.checkForUpdates = setInterval(
      () => this.countNewPosts(),
      30000
    );
  }

  componentWillUnmount() {
    clearInterval(this.checkForUpdates);
  }

  countNewPosts() {
    getNumPosts(this.state.userId).then((res) => {
      const numOfNewPosts = res.count - this.state.postCount;
      if (numOfNewPosts > 0) {
        this.setState({
          newPosts: numOfNewPosts
        });
      }
    });
  }

  handleSeeNewPost() {
    this.props.getPosts(this.state.userId, 'User');
    this.setState({
      newPosts: null,
      postCount: this.state.postCount + this.state.newPosts
    })
  }

  render() {
    const { userId, newPosts} = this.state;
    const posts = this.props.PostReducer.posts.list;
    return (
      <div id="profile-feed">
        {newPosts ? (
          <div onClick={this.handleSeeNewPost.bind(this)}>See {newPosts} new Meow</div>
        ):(
          null
        )}
        <PostList posts={posts} />
      </div>
    );
  }
}

function mapStateToProps({ UserReducer, PostReducer }) {
  return { UserReducer, PostReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (id, category) => {
      dispatch(fetchPosts(id, category));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFeed);
