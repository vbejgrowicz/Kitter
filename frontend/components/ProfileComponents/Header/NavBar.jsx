import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserImage from '../UserImage';
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
              <div onClick={() => this.handleClick('User')}>
                <UserImage user={this.props.AuthReducer.user} />
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

NavBar.propTypes = {
  AuthReducer: PropTypes.object.isRequired,
};

function mapStateToProps({ AuthReducer }) {
  return { AuthReducer };
}

export default connect(mapStateToProps, null)(NavBar);
