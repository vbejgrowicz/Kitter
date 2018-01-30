import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser, updateFollowCount } from '../../actions/UserActions';
import ProfileHeader from './ProfileHeader';
import ProfileRoutes from './ProfileRoutes';
import ProfileUserInfo from './ProfileUserInfo';

class ProfilePage extends React.Component {
  componentWillMount() {
    if (this.props.UserReducer.username !== this.props.match.params.username) {
      this.props.fetchUser(this.props.match.params.username);
    } else {
      this.props.updateCount(this.props.UserReducer._id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.username !== nextProps.match.params.username) {
      this.props.fetchUser(nextProps.match.params.username);
    }
  }

  render() {
    const { username, isLoading, error } = this.props.UserReducer;
    const { params } = this.props.match;
    if (isLoading || (username !== this.props.match.params.username && !error)) {
      return (
        null
      );
    }
    return username === params.username ? (
      <div id="user-profile-page">
        <ProfileHeader user={this.props.UserReducer} />
        <div className="user-content">
          <ProfileUserInfo />
          <ProfileRoutes />
        </div>
      </div>
    ) : (
      <div id="user-profile-page">
        <div>User not found</div>
      </div>

    );
  }
}

ProfilePage.propTypes = {
  match: PropTypes.object.isRequired,
  fetchUser: PropTypes.func.isRequired,
  updateCount: PropTypes.func.isRequired,
  UserReducer: PropTypes.object.isRequired,
};


function mapStateToProps({ UserReducer }) {
  return { UserReducer };
}

const mapDispatchToProps = dispatch => (
  {
    fetchUser: (username) => {
      dispatch(getUser(username));
    },
    updateCount: (id) => {
      dispatch(updateFollowCount(id));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
