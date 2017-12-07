export const checkUser = () => {
  return fetch('/api/user', { method: 'GET', credentials: 'same-origin'})
  .then(resp => resp.json());
}

export const signUp = (newUser) => {
  return fetch('/api/signup', { method: 'POST', credentials: 'same-origin', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(newUser)})
  .then(resp => resp.json());
}

export const logIn = (user) => {
  return fetch('/api/login', { method: 'POST', credentials: 'same-origin', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(user)})
  .then(resp => {
    if (resp.ok) {
      return resp.json();
    } else {
      return ('The username and password you entered did not match our records. Please double-check and try again.');
    }
  });
}
