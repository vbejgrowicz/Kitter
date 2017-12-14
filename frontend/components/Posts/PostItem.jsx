import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/HomepageActions';

class PostItem extends React.Component {

  handleRemove(id) {
    this.props.removePost(id);
  }

  reqAuth(authorId) {
    const currentUserId = this.props.AuthReducer.user.id;
    if (currentUserId === authorId) {
      return true;
    } else {
      return false;
    }
  }

  render() {


    const { _id, text, name, username, author, date } = this.props.post;
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
        {this.reqAuth(author.id) ? (
          <button onClick={() => this.handleRemove(_id)}>Delete Post</button>
        ) : (
          null
        )}
      </li>
    );
  }
}

function mapStateToProps({ AuthReducer }) {
  return { AuthReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    removePost: (id) => {
      dispatch(deletePost(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
