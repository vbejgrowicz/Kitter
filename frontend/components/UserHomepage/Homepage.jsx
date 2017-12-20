import React from 'react';
import PropTypes from 'prop-types';
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
    const authId = this.props.AuthReducer.user;
    return id === authId && !isLoading ? (
      null
    ) : (
      <div id="user-home-page">
        <div className="user-content">
          <HomepageUserInfo />
          <HomepagePostFeed />
        </div>
      </div>
    );
  }
}

Homepage.propTypes = {
  fetchUserData: PropTypes.func.isRequired,
  UserReducer: PropTypes.object.isRequired,
  AuthReducer: PropTypes.object.isRequired,
};

function mapStateToProps({ AuthReducer, UserReducer }) {
  return { AuthReducer, UserReducer };
}

const mapDispatchToProps = dispatch => (
  {
    fetchUserData: (user) => {
      dispatch(getAuthUser(user));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
