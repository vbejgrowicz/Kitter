import React from 'react';
import NewPostForm from '../Posts/NewPostForm';

class HomepageNewPost extends React.Component {

  render() {
    return (
      <div id="homepage-post-box">
        <div className="image">
          <i className="fa fa-user-circle" aria-hidden="true"></i>
        </div>
        <div className="post">
          <NewPostForm initialFocus={false} />
        </div>
      </div>
    );
  }
}

export default HomepageNewPost;
