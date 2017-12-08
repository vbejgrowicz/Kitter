import React from 'react';
import { connect } from 'react-redux';
import { logInUser, signUpUser } from '../../actions/AuthActions';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: ''
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props.formType);
    if(this.props.formType === 'Sign up') {
      this.props.createUser(this.state.name, this.state.username, this.state.password);
    } else {
      this.props.updateUser(this.state.username, this.state.password);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        {this.props.formType === 'Sign up' ? (
          <input type="text"
            placeholder="Full Name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange.bind(this)}
          />
        ) : (
          null
        )}
        <input type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleChange.bind(this)}
        />
        <input type="password"
          placeholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange.bind(this)}
        />
        <button className="blue-btn">{this.props.formType}</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (username, password) => {
      dispatch(logInUser(username, password));
    },
    createUser: (name, username, password) => {
      dispatch(signUpUser(name, username, password));
    },
  };
};

export default connect(null, mapDispatchToProps)(UserForm);
