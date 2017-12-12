import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginTile from '../AuthPages/LoginTile';
import PostTile from './PostTile';
import { clearError } from '../../actions/AuthActions';

const featuredPosts = [
  {
    text: 'A cat can jump even 7 times as high as it is tall.',
    image: 'https://images.unsplash.com/photo-1475518112798-86ae358241eb?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
    author: 'Cat-Facts'
  },
  {
    text: 'It is estimated that cats can make over 60 different sounds.',
    image: 'https://images.unsplash.com/photo-1471874276752-65e2d717604a?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
    author: 'Cat-Facts'
  },
  {
    text: 'Should I knock over the christmas tree or nap all day?',
    image: 'https://images.unsplash.com/photo-1498336179775-9836baef8fdf?auto=format&fit=crop&w=1950&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
    author: 'Bad-Kitty'
  }
];

class LandingPageIndex extends React.Component {
  componentDidMount() {
    const errorPage = this.props.AuthReducer.error.page;
    const currentPage = this.context.router.history.location.pathname;
    if (errorPage) {
      if (currentPage !== errorPage) {
        this.props.updateError();
      }
    }
  }

  render() {
    return (
      <div id="landingPage">
      <div className="header">
        <div>
          <span className="brand-icon"></span>
          <span>
            <Link to="/signup"><button className="btn">Sign up</button></Link>
            <Link to="/login"><button className="btn">Log in</button></Link>
          </span>
        </div>
        <div className="page-title">What's happening?</div>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="title">Featured Posts</div>
          <div className="tiles">
            {featuredPosts.map(post => <PostTile key={post.text} post={post} />)}
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
  router: PropTypes.object.isRequired
}

function mapStateToProps({ AuthReducer }) {
  return { AuthReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateError: () => {
      dispatch(clearError());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageIndex);
