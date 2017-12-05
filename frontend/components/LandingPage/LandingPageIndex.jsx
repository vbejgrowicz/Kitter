import React from 'react';
import '../../../assets/stylesheets/LandingPage.scss';
import LoginTile from './LoginTile';
import PostTile from './PostTile';

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

class LandingPage extends React.Component {
  // componentDidMount() {
  //   console.log('fetch default post data');
  // }
  render() {
    return (
      <div>
      <div className="header">
        <div>
          <span className="brand-icon"></span>
          <span>
            <button className="btn">Sign up</button>
            <button className="btn">Log in</button>
          </span>
        </div>
        <div className="page-title">What's happening?</div>
      </div>
      <div className="content">
        <div className="title">Featured Posts</div>
        <div>
          {featuredPosts.map(post => <PostTile key={post.text} post={post} />)}
          <LoginTile />
        </div>
      </div>
      <div className="bottom-data">
        <div>2017 Kitter</div>
      </div>
      </div>
    );
  }
}

export default LandingPage;
