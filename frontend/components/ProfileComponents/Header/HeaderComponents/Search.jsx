import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import findAllUsers from '../../../../actions/SearchActions';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    const input = e.target.value;
    this.props.updateSearch(input);
  }

  render() {
    return (
      <div className="search-bar">
        <input type="search" onChange={this.handleInput} placeholder="Search Kitter" />
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
