import React from 'react';
import { connect } from 'react-redux';
import HomepageUserInfo from './HomepageUserInfo';
import HomepagePostFeed from './HomepagePostFeed';
import { getAuthUser } from '../../actions/UserActions';

class Homepage extends React.Component {

  componentDidMount() {
    this.props.fetchUserData(this.props.AuthReducer.user);
  }

  render() {
    const { id, isLoading } = this.props.UserReducer;
    return isLoading || !id ? (
      null
    ):(
      <div id="user-home-page">
        <HomepageUserInfo />
        <HomepagePostFeed />
      </div>
    );
  }
}

function mapStateToProps({ AuthReducer, UserReducer }) {
  return { AuthReducer, UserReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: (user) => {
      dispatch(getAuthUser(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
