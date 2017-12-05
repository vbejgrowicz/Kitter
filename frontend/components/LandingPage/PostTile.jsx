import React from 'react';

class PostTile extends React.Component {

  render() {
    return (
      <div className="tile">
        <div className="post-data">
          <div className="post">{this.props.post.text}</div>
          <div className="author">{this.props.post.author}</div>
        </div>
        <div className="image" style={{backgroundImage: 'url(' + this.props.post.image + ')'}}></div>
      </div>
    );
  }
}

export default PostTile;
