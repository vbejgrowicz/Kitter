import React from 'react';

class PostItem extends React.Component {

  render() {
    return (
      <div id="post-item">
        {this.props.post.text}
      </div>
    );
  }
}

export default PostItem;
