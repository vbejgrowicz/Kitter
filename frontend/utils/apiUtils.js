export const signUp = (newUser) => {
  return fetch('/api/signup', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(newUser)})
  .then(resp => resp.json());
}
