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
      input: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleInput(e) {
    const input = e.target.value;
    this.setState({ input });
    this.props.updateSearch(input);
  }

  handleFocus(focus) {
    if (this.state.Search !== focus) {
      this.setState({ Search: focus });
    }
  }

  clearInput() {
    const input = '';
    this.handleFocus(false);
    this.props.updateSearch(input);
    this.setState({ input });
  }

  render() {
    return (
      <div className="search-bar">
        <input
          id="searchbar"
          type="text"
          onChange={this.handleInput}
          onFocus={() => this.handleFocus(true)}
          value={this.state.input}
          placeholder="Search Kitter"
        />
        {this.state.input && (
          <button className="clear-btn" onClick={this.clearInput}>&times;</button>
        )}
        {this.state.Search && (
          <SearchResults onClose={() => this.handleFocus(false)} onSelect={this.clearInput} />
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
