import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/PostActions';

class UserPageIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Welcome {this.props.AuthReducer.name}!
      </div>
    );
  }
}

function mapStateToProps({ PostReducer, AuthReducer }) {
  return { PostReducer, AuthReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {
      dispatch(getPosts());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPageIndex);
