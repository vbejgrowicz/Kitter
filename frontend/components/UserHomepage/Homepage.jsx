import React from 'react';
import { connect } from 'react-redux';
import HomepageUserInfo from './HomepageUserInfo';
import HomepagePostFeed from './HomepagePostFeed';
import { setUser, findUserPostCount } from '../../actions/UserActions';

class Homepage extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.AuthReducer.user);
  }

  render() {
    return (
      <div id="user-home-page">
        <HomepageUserInfo />
        <HomepagePostFeed />
      </div>
    );
  }
}

function mapStateToProps({ AuthReducer }) {
  return { AuthReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (user) => {
      dispatch(setUser(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
