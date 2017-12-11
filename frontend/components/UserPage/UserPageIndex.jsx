import React from 'react';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions/AuthActions';
import { getPosts } from '../../actions/PostActions';

class UserPageIndex extends React.Component {

  componentDidMount() {
    this.props.getPosts();
  }

  handleClick() {
    this.props.updateUser();
  }

  render() {
    return (
      <div>
        Welcome {this.props.AuthReducer.name}!
        <button onClick={this.handleClick.bind(this)}>Log out</button>
      </div>
    );
  }
}

function mapStateToProps({ AuthReducer }) {
  return { AuthReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => {
      dispatch(logOutUser());
    },
    getPosts: () => {
      dispatch(getPosts());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPageIndex);
