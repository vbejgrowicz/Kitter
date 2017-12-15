import React from 'react';
import PostItem from './PostItem';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPosts: null,
    };
  }

  componentDidMount() {
    this.checkForUpdates = setInterval(
      () => this.countNewPosts(),
      30000
    );
  }

  componentWillUnmount() {
    clearInterval(this.checkForUpdates);
  }

  countNewPosts() {
    this.props.getNumPosts().then((res) => {
      const numOfNewPosts = res.count - this.props.postCount;
      if (numOfNewPosts > 0) {
        this.setState({
          newPosts: numOfNewPosts
        });
      }
    });
  }

  handleNewPosts() {
    this.props.updatePosts();
    this.setState({
      newPosts: null,
    })
  }

  render() {
    const { newPosts } = this.state;
    const posts = this.props.posts.map((post) => {
      return <PostItem post={post} key={post._id} />
    });
    return (
      <div>
        {newPosts ? (
          <div onClick={this.handleNewPosts.bind(this)}>See {newPosts} new Meow</div>
        ):(
          null
        )}
        <ul id="post-list">
          {posts}
        </ul>
      </div>
    );
  }
}

export default PostList;
