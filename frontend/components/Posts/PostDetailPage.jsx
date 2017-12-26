import React from 'react';
import PropTypes from 'prop-types';

class PostDetailPage extends React.Component {
  componentWillMount() {
    console.log(this.props.match);
  }

  render() {
    return (
      <div id="post-detail-view">
        <div id="full-screen">
          <div>POST DETAIL</div>
        </div>
      </div>
    );
  }
}

PostDetailPage.propTypes = {

};

PostDetailPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default PostDetailPage;
