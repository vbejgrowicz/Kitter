import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import reactStringReplace from 'react-string-replace';
import UserImage from '../../Image/UserImage';

function SearchResults({ SearchReducer, onClose, onSelect }) {
  function highlightKeyword(text) {
    return (
      reactStringReplace(text, SearchReducer.keyword, (match, i) => (
        <span key={i} className="match">{match}</span>
      ))
    );
  }
  function itemResult(user) {
    return (
      <li key={user._id}>
        <Link to={`/${user.username}`} onClick={onSelect}>
          <UserImage user={user} />
          <span id="name-string" className="name">{highlightKeyword(user.name)}</span>
          <span id="username-string" className="username">@{highlightKeyword(user.username)}</span>
        </Link>
      </li>
    );
  }
  const { results } = SearchReducer;
  const resultList = results.slice(0, 7).map(result => itemResult(result));
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
