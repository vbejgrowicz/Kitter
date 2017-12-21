import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost } from '../../actions/PostActions';
import postedTime from '../../utils/postedTime';

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: postedTime(this.props.post.date),
    };
  }

  componentDidMount() {
    if (this.state.time) {
      this.interval = setInterval(
        () => this.updateTime()
        , 30000,
      );
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleRemove(post) {
    this.props.removePost(post);
  }

  updateTime() {
    this.setState({ time: postedTime(this.props.post.date) });
  }

  reqAuth(authorId) {
    const currentUserId = this.props.AuthReducer.user.id;
    if (currentUserId === authorId) {
      return true;
    }
    return false;
  }

  render() {
    const {
      text,
      author,
      date,
    } = this.props.post;
    const dateString = new Date(date).toDateString();
    return (
      <li className="post-item">
        <Link to={`/${author.username}`}>
          <div className="user-image" />
        </Link>
        <div className="post-content">
          <Link to={`/${author.username}`}>
            <span className="name">{author.name}</span>
            <span className="username">@{author.username}</span>
          </Link>
          <span className="time">&middot; {this.state.time ? this.state.time : dateString }</span>
          <div className="text">{text}</div>
          {this.reqAuth(author.id) ? (
            <button onClick={() => this.handleRemove(this.props.post)}>Delete Post</button>
          ) : (
            null
          )}
        </div>

      </li>
    );
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  removePost: PropTypes.func.isRequired,
  AuthReducer: PropTypes.object.isRequired,
};

function mapStateToProps({ AuthReducer }) {
  return { AuthReducer };
}

const mapDispatchToProps = dispatch => (
  {
    removePost: (post) => {
      dispatch(deletePost(post));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
