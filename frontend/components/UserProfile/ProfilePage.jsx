import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkUser } from '../../actions/UserActions';
import ProfileFeed from './ProfileFeed';

class ProfilePage extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.username);
  }

  render() {
    const { id, username } = this.props.UserReducer;
    const { isLoading } = this.props.UserReducer.isLoading;

    if (isLoading) {
      return (
        null
      );
    }
    return id ? (
      <div id="user-home-page">
        <div style={{ display: 'inline-block', width: 230 }}>
          {username}&apos;s Page
        </div>
        <ProfileFeed />
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
      dispatch(checkUser(username));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
