import { logIn } from '../../utils/apiUtils';
import { signUp } from '../../utils/apiUtils';

export function handleInput(event) {
  if (this.state.error) {
    this.setState({error: ""});
  };
  const input = event.target.name;
  this.setState({
    [input]: event.target.value
  });
};

export function handleLogin(event) {
  event.preventDefault();
  const userData = {username: this.state.username, password: this.state.password};
  logIn(userData).then(response => {
    if (response.username) {
      this.props.updateUser(response);
      this.context.router.history.push('/');
    } else {
      if (this.context.router.history.location.pathname === "/signup") {
        this.context.router.history.push('/login');
      } else {
        this.setState({error: response});
      }
    }
  });
};

export function handleSignup(event) {
  event.preventDefault();
  const newUser = {name: this.state.name , username: this.state.username, password: this.state.password};
  signUp(newUser).then(response => {
    if (response.username) {
      this.props.updateUser(response);
      this.context.router.history.push('/');
    } else {
      this.setState({error: response.message});
    }
  });
};
