import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    console.log(this.state.value);
    return (
      <div className="search-bar">
        <input type="search" onChange={this.handleInput} placeholder="Search Kitter" />
      </div>
    );
  }
}

export default Search;
