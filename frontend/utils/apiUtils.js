// User
export const checkUser = () => (
  fetch('/api/user', { method: 'GET', credentials: 'same-origin' })
    .then(resp => resp.json())
);

export const signUp = newUser => (
  fetch('/api/signup', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser),
  })
    .then(resp => resp.json())
);

export const logIn = user => (
  fetch('/api/login', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((resp) => {
      if (resp.ok) {
        return resp.json();
      }
      return ('The username and password you entered did not match our records. Please double-check and try again.');
    })
);

export const logOut = () => (
  fetch('/api/logout', { method: 'GET', credentials: 'same-origin' })
    .then(resp => resp.json())
);

export const findUser = username => (
  fetch(`/api/users/${username}`, { method: 'GET', credentials: 'same-origin' })
    .then(resp => resp.json())
);

// Follow
export const getFollowers = () => (
  fetch('/api/followers', {
    method: 'GET',
    credentials: 'same-origin',
  })
    .then(resp => resp.json())
);

export const follow = user => (
  fetch('api/followers/follow', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then(resp => resp.json())
);

export const unfollow = user => (
  fetch(`/api/followers/unfollow/${user.id}`, {
    method: 'DELETE',
    credentials: 'same-origin',
  })
);

// Posts
export const getAllPosts = () => (
  fetch('/api/posts', { method: 'GET', credentials: 'same-origin' })
    .then(resp => resp.json())
);

export const getNewPosts = numOfPosts => (
  fetch(`/api/posts/new/${numOfPosts}`, { method: 'GET', credentials: 'same-origin' })
    .then(resp => resp.json())
);

export const getUserPosts = id => (
  fetch(`/api/posts/${id}`, { method: 'GET', credentials: 'same-origin' })
    .then(resp => resp.json())
);

export const addPost = post => (
  fetch('/api/posts', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: post,
    }),
  })
    .then(resp => resp.json())
);

export const removePost = id => (
  fetch(`/api/posts/${id}`, { method: 'DELETE', credentials: 'same-origin' })
    .then(resp => resp.json())
);

// Counts
export const getNumPosts = id => (
  fetch(`/api/count/${id}/posts`, { method: 'GET', credentials: 'same-origin' })
    .then(resp => resp.json())
);

export const getFollowingCount = id => (
  fetch(`/api/count/${id}/following`, { method: 'GET', credentials: 'same-origin' })
    .then(resp => resp.json())
);

export const getFollowerCount = id => (
  fetch(`/api/count/${id}/follower`, { method: 'GET', credentials: 'same-origin' })
    .then(resp => resp.json())
);

// Counts
export const getTotalNumPosts = () => (
  fetch('/api/count/posts', { method: 'GET', credentials: 'same-origin' })
    .then(resp => resp.json())
);
