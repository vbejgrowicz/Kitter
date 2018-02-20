import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function SearchResults({ SearchReducer }) {
  const { results } = SearchReducer;
  return results.length > 0 && (
    <div id="search-results">
      <div className="dropdown">
        <ul>
          Results
        </ul>
      </div>
    </div>
  );
}

SearchResults.propTypes = {
  SearchReducer: PropTypes.object.isRequired,
};

function mapStateToProps({ SearchReducer }) {
  return { SearchReducer };
}


export default connect(mapStateToProps, null)(SearchResults);
