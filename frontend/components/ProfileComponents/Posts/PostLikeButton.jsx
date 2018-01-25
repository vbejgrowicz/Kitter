import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updatePost } from '../../../actions/PostActions';

function PostLikeButton({ post, AuthReducer, updateLikes }, contextTypes) {
  const authUser = AuthReducer.user;
  const { likes } = post;
  const isLiked = likes.find(user => user === authUser._id);

  const handleClick = () => {
    if (authUser._id === null) {
      contextTypes.router.history.push('/login');
    } else {
      updateLikes(isLiked, post);
    }
  };

  return (
    <div className={isLiked ? 'unlike button' : 'like button'}>
      <button onClick={handleClick}>
        {isLiked ?
          <i className="fa fa-heart" aria-hidden="true" />
        :
          <i className="fa fa-heart-o" aria-hidden="true" />
        }
        <span className="like-count">{likes.length}</span>
      </button>
    </div>
  );
}

PostLikeButton.contextTypes = {
  router: PropTypes.object.isRequired,
};

PostLikeButton.propTypes = {
  post: PropTypes.object.isRequired,
  AuthReducer: PropTypes.object.isRequired,
  updateLikes: PropTypes.func.isRequired,
};

function mapStateToProps({ AuthReducer }) {
  return { AuthReducer };
}

const mapDispatchToProps = dispatch => (
  {
    updateLikes: (isLiked, post) => {
      dispatch(updatePost(isLiked, post));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PostLikeButton);
