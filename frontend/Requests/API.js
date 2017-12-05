export const signUp = (newUser) => {
  fetch('/api/signup', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(newUser)})
  .then(res => res.json())
  .then(json => {
    if (!json.success) {
      console.log(json.message);
      return json;
    } else {
      console.log(json.message);
      return json;
    }
  });
}
