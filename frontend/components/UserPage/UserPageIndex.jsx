import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/PostActions';

class UserPageIndex extends React.Component {

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div>
        Welcome {this.props.AuthReducer.name}!
      </div>
    );
  }
}

function mapStateToProps({ AuthReducer }) {
  return { AuthReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => {
      dispatch(getPosts());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPageIndex);
