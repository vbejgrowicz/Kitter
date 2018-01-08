import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFollows } from '../../../actions/UserActions';
import UserItem from './UserItem';

class UserList extends React.Component {
  componentWillMount() {
    const { category, UserReducer } = this.props;
    this.props.fetchUsers(category, UserReducer._id);
  }

  componentWillReceiveProps(nextProps) {
    const { category, UserReducer } = this.props;
    if (category !== nextProps.category) {
      this.props.fetchUsers(nextProps.category, UserReducer._id);
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.UserReducer.data.follows.isLoading) {
      return false;
    }
    return true;
  }

  render() {
    const { list, isLoading } = this.props.UserReducer.data.follows;
    const users = list.map(item => <UserItem user={item} key={item._id} />);

    return !isLoading && (
      <ul id="user-list">
        {users}
      </ul>
    );
  }
}

UserList.propTypes = {
  category: PropTypes.string.isRequired,
  UserReducer: PropTypes.object.isRequired,
  fetchUsers: PropTypes.func.isRequired,
};

function mapStateToProps({ UserReducer }) {
  return { UserReducer };
}

const mapDispatchToProps = dispatch => (
  {
    fetchUsers: (category, userID) => {
      dispatch(getFollows(category, userID));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
