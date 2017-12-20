import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../../actions/UserActions';
import ProfileHeader from './ProfileHeader';
import ProfileFeed from './ProfileFeed';
import ProfileUserInfo from './ProfileUserInfo';

class ProfilePage extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.username);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match !== nextProps.match) {
      this.props.fetchUser(nextProps.match.params.username);
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.UserReducer.id === nextProps.UserReducer.id) {
      return false;
    }
    return true;
  }

  render() {
    const { id, isLoading } = this.props.UserReducer;
    if (isLoading) {
      return (
        null
      );
    }
    return id ? (
      <div id="user-home-page">
        <ProfileHeader />
        <div className="user-content">
          <ProfileUserInfo />
          <ProfileFeed />
        </div>
      </div>
    ) : (
      <div>User not found</div>
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
