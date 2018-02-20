import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function SearchResults({ SearchReducer, onClose, onSelect }) {
  function itemResult(user) {
    return (
      <li key={user._id}>
        <Link to={`/${user.username}`} onClick={onSelect}>
          <span className="name">{user.name}</span>
        </Link>
      </li>
    );
  }
  const { results } = SearchReducer;
  const resultList = results.map(result => itemResult(result));
  return results.length > 0 && (
    <div id="search-results">
      <div className="dropdown">
        <ul>
          {resultList}
        </ul>
      </div>
      <div id="full-screen" onClick={onClose} />
    </div>
  );
}

SearchResults.propTypes = {
  SearchReducer: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

function mapStateToProps({ SearchReducer }) {
  return { SearchReducer };
}


export default connect(mapStateToProps, null)(SearchResults);
