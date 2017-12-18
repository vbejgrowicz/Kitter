import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logInUser, signUpUser } from '../../actions/AuthActions';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: '',
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  redirectFailure() {
    this.context.router.history.push('/login');
  }

  validate() {
    const { name, username, password } = this.state;
    return {
      name: name.length === 0,
      username: username.length === 0,
      password: password.length <= 6,
    };
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, username, password } = this.state;
    if (this.props.formType === 'Sign up') {
      if (this.checkErrors()) {
        this.props.createUser(name, username, password);
      }
    } else {
      this.props.updateUser(username, password, this.redirectFailure.bind(this));
    }
  }

  checkErrors() {
    const errors = this.validate();
    this.setState({ errors });
    return !Object.keys(errors).some(x => errors[x]);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.formType === 'Sign up' ? (
          <div>
            <p className="error">{this.state.errors.name ? (
              <span>
                <i className="fa fa-times" aria-hidden="true" />
                Enter a Name
              </span>
              ) : (
                null
              )}
            </p>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
        ) : (
          null
        )}
        <div>
          <p className="error">{this.state.errors.username ? (
            <span>
              <i className="fa fa-times" aria-hidden="true" />
              Enter a Username
            </span>
            ) : (
              null
            )}
          </p>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <p className="error">{this.state.errors.password ? (
            <span>
              <i className="fa fa-times" aria-hidden="true" />
              Password must be at least 6 characters
            </span>
            ) : (
              null
            )}
          </p>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <button className="blue-btn">{this.props.formType}</button>
      </form>
    );
  }
}

UserForm.contextTypes = {
  router: PropTypes.object.isRequired,
};

UserForm.propTypes = {
  formType: PropTypes.string.isRequired,
  updateUser: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (username, password, redirectFailure) => {
      dispatch(logInUser(username, password, redirectFailure));
    },
    createUser: (name, username, password) => {
      dispatch(signUpUser(name, username, password));
    },
  };
};

export default connect(null, mapDispatchToProps)(UserForm);
