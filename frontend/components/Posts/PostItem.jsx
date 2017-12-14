import React from 'react';

class PostItem extends React.Component {

  render() {
    const { text, name, username, author, date } = this.props.post;
    const dateString = new Date(date);
    const currentTime = new Date();
    //Time Diff in ms
    console.log(currentTime.getTime() - dateString.getTime());
    //Date of post
    console.log(dateString.toDateString());
    return (
      <li className="post-item">
        <div>{author.name}</div>
        <div>@{author.username}</div>
        <div>{text}</div>
      </li>
    );
  }
}

export default PostItem;
