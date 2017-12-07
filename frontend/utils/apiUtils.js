export const checkUser = () => {
  return fetch('/api/user', { method: 'GET', credentials: 'same-origin'})
  .then(resp => resp.json());
}

export const signUp = (newUser) => {
  return fetch('/api/signup', { method: 'POST', credentials: 'same-origin', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(newUser)})
  .then(resp => resp.json());
}
