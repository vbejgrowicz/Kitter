import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/PostActions';
import postedTime from '../../utils/postedTime';

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
    const time = postedTime(date);
    return (
      <li className="post-item">
        <Link to={`/${author.username}`}>
          <span className="name">{author.name}</span>
          <span className="username">@{author.username}</span>
        </Link>
        <span className="time">&middot; {time}</span>
        <div className="text">{text}</div>
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
