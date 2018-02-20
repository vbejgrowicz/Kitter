import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import findAllUsers from '../../../../actions/SearchActions';
import SearchResults from './SearchResults';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Search: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleInput(e) {
    const input = e.target.value;
    this.props.updateSearch(input);
  }

  handleFocus() {
    this.setState({
      Search: !this.state.Search,
    });
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="search"
          onChange={this.handleInput}
          onFocus={this.handleFocus}
          onBlur={this.handleFocus}
          placeholder="Search Kitter"
        />
        {this.state.Search && (
          <SearchResults />
        )}
      </div>
    );
  }
}

Search.propTypes = {
  updateSearch: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => (
  {
    updateSearch: (input) => {
      dispatch(findAllUsers(input));
    },
  }
);

export default connect(null, mapDispatchToProps)(Search);
