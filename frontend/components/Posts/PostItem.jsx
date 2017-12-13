import React from 'react';

class PostItem extends React.Component {

  render() {
    return (
      <li className="post-item">
        <div>{this.props.post.author.name}</div>
        <div>@{this.props.post.author.username}</div>
        <div>{this.props.post.text}</div>
      </li>
    );
  }
}

export default PostItem;
