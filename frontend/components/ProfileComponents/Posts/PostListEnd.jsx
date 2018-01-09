import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import brandIcon from '../../../../assets/images/cat-grey.png';

function PostListEnd({ listLength, AuthReducer, UserReducer }) {
  const authUser = AuthReducer.user._id;
  const user = UserReducer._id;
  const { username } = UserReducer;
  return (
    <div className={listLength === 0 ? 'list-end empty' : 'list-end'}>
      <img src={brandIcon} alt="" />
      {listLength === 0 && (
        authUser === user ? (
          <div>You haven&apos;t Meowed Yet</div>
        ) : (
          <div>@{username} hasn&apos;t Meowed Yet</div>
        )
      )}
    </div>
  );
}

PostListEnd.propTypes = {
  listLength: PropTypes.number.isRequired,
  AuthReducer: PropTypes.object.isRequired,
  UserReducer: PropTypes.object.isRequired,
};

function mapStateToProps({ AuthReducer, UserReducer }) {
  return { AuthReducer, UserReducer };
}

export default connect(mapStateToProps, null)(PostListEnd);
