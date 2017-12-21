import React from 'react';
import { NavLink } from 'react-router-dom';
import UserDropdown from './UserDropdown';
import PostModal from './PostModal';

function ignoreClose(event) {
  event.stopPropagation();
}

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      User: false,
      Meow: false,
    };
  }

  handleClick(selected) {
    if (!this.state[selected]) {
      this.setState({
        User: false,
        Meow: false,
      });
    }
    this.setState({
      [selected]: !this.state[selected],
    });
  }

  render() {
    return (
      <div>
        <div id="nav">
          <div className="link-container">
            <div className="left">
              <NavLink activeClassName="active" exact to="/">
                <div className="home">
                  <i className="fa fa-home" aria-hidden="true" />
                </div>
              </NavLink>
            </div>
            <div className="center">
              <div className="brand-icon" />
            </div>
            <div className="right">
              <div className="user-image" onClick={() => this.handleClick('User')} />
              <button onClick={() => this.handleClick('Meow')}>Meow</button>
            </div>
          </div>
        </div>
        {this.state.User && (
          <UserDropdown onClose={() => this.handleClick('User')} ignoreClose={ignoreClose} />
        )}
        {this.state.Meow && (
          <PostModal onClose={() => this.handleClick('Meow')} ignoreClose={ignoreClose} />
        )}
      </div>
    );
  }
}

export default NavBar;
