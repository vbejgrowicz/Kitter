import React from 'react';

class PostTile extends React.Component {

  render() {
    return (
      <div className="tile">
        <div>{this.props.post.text}</div>
        <div>{this.props.post.author}</div>
        <div className="image" style={{backgroundImage: 'url(' + this.props.post.image + ')'}}></div>
      </div>
    );
  }
}

export default PostTile;
