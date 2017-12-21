import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFollows } from '../../actions/UserActions';
import UserItem from './UserItem';

class UserList extends React.Component {
  componentWillMount() {
    const { category, UserReducer } = this.props;
    this.props.fetchUsers(category, UserReducer.id);
  }

  render() {
    const { list } = this.props.UserReducer.data.follows;
    const users = list.map(item => <UserItem user={item} key={item.id} />);

    return (
      <div>
        <ul id="user-list">
          {users}
        </ul>
      </div>
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
