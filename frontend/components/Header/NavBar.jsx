import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import UserDropdown from './UserDropdown';
import PostModal from './PostModal';
import Message from './Message';

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
              <Link to="/"><i className="fa fa-home" aria-hidden="true" /></Link>
            </div>
            <div className="center">
              <Link to="/"><div className="brand-icon" /></Link>
            </div>
            <div className="right">
              <i className="fa fa-user-circle" aria-hidden="true" onClick={() => this.handleClick('User')} />
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
        {this.props.PostReducer.message.status && (
          <Message text="Message" />
        )}
      </div>
    );
  }
}


function mapStateToProps({ PostReducer }) {
  return { PostReducer };
}


export default connect(mapStateToProps, null)(NavBar);
