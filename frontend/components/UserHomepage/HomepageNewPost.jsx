import React from 'react';
import NewPostForm from '../Posts/NewPostForm';

function HomepageNewPost() {
  return (
    <div id="homepage-post-box">
      <div className="image">
        <div className="default-image" />
      </div>
      <div className="post">
        <NewPostForm initialFocus={false} />
      </div>
    </div>
  );
}

export default HomepageNewPost;
