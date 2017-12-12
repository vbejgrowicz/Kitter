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

export const logOut = () => {
  return fetch('/api/logout', { method: 'GET', credentials: 'same-origin'})
  .then(resp => resp.json());
}

export const getAllPosts = () => {
  return fetch('/api/posts', { method: 'GET', credentials: 'same-origin'})
  .then(resp => resp.json());
}

export const getUserPosts = (username) => {
  return fetch(`/api/posts/${username}`, { method: 'GET', credentials: 'same-origin' })
  .then(resp => resp.json());
}

export const addPost = (post) => {
  return fetch('/api/posts', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      text: post,
    })
  })
  .then(resp => resp.json());
}
