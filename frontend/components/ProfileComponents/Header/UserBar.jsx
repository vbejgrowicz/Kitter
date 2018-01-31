import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import UserImage from '../Image/UserImage';
import UserDropdown from './HeaderComponents/UserDropdown';
import PostModal from './HeaderComponents/PostModal';

function ignoreClose(event) {
  event.stopPropagation();
}

class UserBar extends React.Component {
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
              <NavLink exact to="/">
                <div className="home">
                  <i className="fa fa-home" aria-hidden="true" />
                </div>
              </NavLink>
            </div>
            <div className="center">
              <div className="brand-icon" />
            </div>
            <div className="right">
              <div onClick={() => this.handleClick('User')}>
                <UserImage user={this.props.user} />
              </div>
              <button className="meow" onClick={() => this.handleClick('Meow')}>Meow</button>
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

UserBar.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserBar;
