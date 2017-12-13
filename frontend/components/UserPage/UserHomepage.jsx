import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/PostActions';
import UserProfileCard from './UserProfileCard';
import NewPostForm from '../Posts/NewPostForm';

class UserPageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    }
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  handleFocus() {
    this.setState({ focus: true });
  }

  handleBlur() {
    this.setState({ focus: false });
  }

  render() {
    return (
      <div id="user-home-page">
        <UserProfileCard />
        <div id="profile-feed">
          <div onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)}>
            <NewPostForm isFocused={this.state.focus} />
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps({ PostReducer }) {
  return { PostReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {
      dispatch(getPosts());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPageIndex);
