import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/stylesheets/AuthPages.scss';
import { signUp } from '../../utils/apiUtils';

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: ''
    }
    this.handleSignup = this.handleSignup.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const input = event.target.name;
    this.setState({
      [input]: event.target.value
    });
  }

  handleSignup(event) {
    event.preventDefault();
    const newUser = {name: this.state.name , username: this.state.username, password: this.state.password};
    signUp(newUser).then(resp => {
      console.log(resp);
    });
  }

  render() {
    return (
      <div className="signup-page">
        <div className="top-bar">
          <Link to="/"><span className="brand-icon"></span></Link>
          <span>Have an Account? <span>Log in</span></span>
        </div>
        <div className="signup">
          <div>Join Kitter today.</div>
          <form onSubmit={this.handleSignup}>
            <input type="text"
              placeholder="Full name"
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
            />
            <input type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleInput}
            />
            <input type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInput}
            />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
