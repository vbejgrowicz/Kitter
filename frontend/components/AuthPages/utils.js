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
