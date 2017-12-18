import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
  }

  toggleLoginModal() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="header">
        <Link to="/"><span className="brand-icon"></span></Link>
        {this.props.type === 'Sign up' ? (
          <div>
            <div className="btn" onClick={this.toggleLoginModal}>
              Have an Account?
              <span>Log in <i className="fa fa-caret-down" aria-hidden="true" /></span>
            </div>
            <LoginModal show={this.state.isOpen} onClose={this.toggleLoginModal} />
          </div>
        ) : (
          <div>
            <div className="btn"><Link to="/signup">New to Kitter? <span>Sign up</span></Link></div>
          </div>
        )}
      </div>
    );
  }
}

Header.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Header;
