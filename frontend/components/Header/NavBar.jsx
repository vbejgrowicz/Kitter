import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/stylesheets/NavBar.scss';
import UserDropdown from './UserDropdown';
import MeowModal from './MeowModal';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      User: false,
      Meow: false
    }
  }

  toggleState(selected) {
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

  render() {
    return (
      <div id="nav">
        <div className="link-container">
          <div className="left">
            <Link to="/"><i className="fa fa-home" aria-hidden="true"></i></Link>
          </div>
          <div className="center">
            <Link to="/"><div className="brand-icon"></div></Link>
          </div>
          <div className="right">
            <i className="fa fa-user-circle" aria-hidden="true" onClick={this.toggleState.bind(this, 'User')}></i>
            <button className="link" onClick={this.toggleState.bind(this, 'Meow')}>Meow</button>
          </div>
        </div>
        <UserDropdown show={this.state.User} onClose={this.toggleState.bind(this, 'User')} />
        <MeowModal show={this.state.Meow} onClose={this.toggleState.bind(this, 'Meow')} />
      </div>
    );
  }
}

export default NavBar;
