import React from 'react';
import { Link } from 'react-router-dom';
import UserDropdown from './UserDropdown';
import PostModal from './PostModal';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      User: false,
      Meow: false
    }
  }

  handleClick(selected) {
    if (!this.state[selected]) {
      this.setState({
        User: false,
        Meow: false,
      });
    }
    this.setState({
      [selected]: !this.state[selected]
    });
  }

  ignoreClose(event) {
    event.stopPropagation();
  }

  render() {
    return (
      <div>
        <div id="nav">
          <div className="link-container">
            <div className="left">
              <Link to="/"><i className="fa fa-home" aria-hidden="true"></i></Link>
            </div>
            <div className="center">
              <Link to="/"><div className="brand-icon"></div></Link>
            </div>
            <div className="right">
              <i className="fa fa-user-circle" aria-hidden="true" onClick={this.handleClick.bind(this, 'User')}></i>
              <button onClick={this.handleClick.bind(this, 'Meow')}>Meow</button>
            </div>
          </div>
        </div>
        {this.state.User && (
          <UserDropdown onClose={this.handleClick.bind(this, 'User')} ignoreClose={this.ignoreClose.bind(this)} />
        )}
        {this.state.Meow && (
          <PostModal onClose={this.handleClick.bind(this, 'Meow')} ignoreClose={this.ignoreClose.bind(this)} />
        )}
      </div>
    );
  }
}

export default NavBar;
