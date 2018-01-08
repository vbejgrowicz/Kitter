import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomepageUserInfo from './HomepageUserInfo';
import HomepagePostFeed from './HomepagePostFeed';
import { getAuthUser } from '../../actions/UserActions';

class Homepage extends React.Component {
  componentWillMount() {
    this.props.fetchUserData(this.props.AuthReducer.user);
  }

  render() {
    const { UserReducer } = this.props;
    const { _id, isLoading } = UserReducer;
    const authId = this.props.AuthReducer.user._id;
    return authId === _id && !isLoading ? (
      <div id="user-home-page">
        <div className="user-content">
          <HomepageUserInfo user={UserReducer} />
          <HomepagePostFeed user={UserReducer} />
        </div>
      </div>
    ) : (
      null
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
