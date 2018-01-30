import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginTile from '../AuthPages/LoginTile';
import PostTile from './PostTile';
import GuestLoginButton from '../AuthPages/GuestLoginButton';
import { clearError } from '../../actions/AuthActions';
import { fetchPosts, emptyPostList } from '../../actions/PostActions';

class LandingPageIndex extends React.Component {
  componentDidMount() {
    const errorPage = this.props.AuthReducer.error.page;
    const currentPage = this.context.router.history.location.pathname;
    if (errorPage) {
      if (currentPage !== errorPage) {
        this.props.updateError();
      }
    } else {
      this.props.getPosts();
    }
  }

  componentWillUnmount() {
    this.props.removePostList();
  }

  render() {
    const { list } = this.props.PostReducer.posts;
    return (
      <div id="landingPage">
        <div className="header">
          <div>
            <span className="brand-icon" />
            <span>
              <Link to="/signup"><button className="btn">Sign up</button></Link>
              <Link to="/login"><button className="btn">Log in</button></Link>
              <GuestLoginButton />
            </span>
          </div>
          <div className="page-title">What&apos;s happening?</div>
        </div>
        <div className="page-content">
          <div className="container">
            <div className="title">Featured Posts</div>
            <div className="tiles">
              {list.map(post => <PostTile key={post._id} post={post} />)}
              <LoginTile />
            </div>
          </div>
        </div>
        <div className="bottom-data">
          <div>2017 Kitter</div>
        </div>
      </div>
    );
  }
}

LandingPageIndex.contextTypes = {
  router: PropTypes.object.isRequired,
};

LandingPageIndex.propTypes = {
  updateError: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  removePostList: PropTypes.func.isRequired,
  AuthReducer: PropTypes.object.isRequired,
  PostReducer: PropTypes.object.isRequired,
};

function mapStateToProps({ AuthReducer, PostReducer }) {
  return { AuthReducer, PostReducer };
}

const mapDispatchToProps = dispatch => (
  {
    updateError: () => {
      dispatch(clearError());
    },
    getPosts: () => {
      dispatch(fetchPosts());
    },
    removePostList: () => {
      dispatch(emptyPostList());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageIndex);
