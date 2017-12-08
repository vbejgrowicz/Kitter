import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/stylesheets/AuthPages/AuthPages.scss';
import LoginModal from './LoginModal';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
  }

  toggleLoginModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="header">
        <Link to="/"><span className="brand-icon"></span></Link>
        {this.props.type === 'Sign up' ? (
          <div>
            <div className="btn" onClick={this.toggleLoginModal}>Have an Account? <span>Log in</span></div>
            <LoginModal show={this.state.isOpen} onClose={this.toggleModal} />
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

export default Header;
