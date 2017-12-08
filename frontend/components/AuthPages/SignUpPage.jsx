import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../assets/stylesheets/AuthPages/AuthPages.scss';
import UserForm from './UserForm';
import Header from './Header';
import ErrorMessage from './ErrorMessage';

class SignUpPage extends React.Component {
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
      <div id="auth">
        <Header type="Sign up" />
        <ErrorMessage />
        <div className="form">
          <div>Join Kitter today.</div>
          <UserForm formType="Sign up"/>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ AuthReducer }) {
  return { AuthReducer };
}

export default connect(mapStateToProps, null)(SignUpPage);
