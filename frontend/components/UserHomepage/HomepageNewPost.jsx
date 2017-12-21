import React from 'react';
import NewPostForm from '../Posts/NewPostForm';

function HomepageNewPost() {
  return (
    <div id="homepage-post-box">
      <div className="user-image" />
      <div className="post">
        <NewPostForm initialFocus={false} />
      </div>
    </div>
  );
}

export default HomepageNewPost;
