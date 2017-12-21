import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../../actions/UserActions';
import ProfileHeader from './ProfileHeader';
import ProfileRoutes from './ProfileRoutes';
import ProfileUserInfo from './ProfileUserInfo';

class ProfilePage extends React.Component {
  componentWillMount() {
    this.props.fetchUser(this.props.match.params.username);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match !== nextProps.match) {
      this.props.fetchUser(nextProps.match.params.username);
    }
  }

  shouldComponentUpdate(nextProps) {
    const { username } = this.props.UserReducer;
    if ((username === nextProps.match.params.username) && (this.props.match === nextProps.match)) {
      return false;
    }
    return true;
  }

  render() {
    const { username, isLoading } = this.props.UserReducer;
    const { params } = this.props.match;

    if (isLoading) {
      return (
        null
      );
    }
    return username === params.username ? (
      <div id="user-profile-page">
        <ProfileHeader />
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
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
