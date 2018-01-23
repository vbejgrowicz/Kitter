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

// Images
export const addProfileImage = formData => (
  fetch('/api/image/profile', {
    method: 'POST',
    credentials: 'same-origin',
    body: formData,
  })
    .then(resp => resp.json())
);

// Follow
export const getFollowers = userID => (
  fetch(`/api/follows/followers/${userID}`, {
    method: 'GET',
    credentials: 'same-origin',
  })
    .then(resp => resp.json())
);

export const getFollowing = userID => (
  fetch(`/api/follows/following/${userID}`, {
    method: 'GET',
    credentials: 'same-origin',
  })
    .then(resp => resp.json())
);

export const follow = user => (
  fetch('api/follows/follow', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((resp) => {
      if (!resp.ok) {
        return 'You need to be logged in to do this.';
      }
      return resp.json();
    })
);

export const unfollow = user => (
  fetch(`/api/follows/unfollow/${user._id}`, {
    method: 'DELETE',
    credentials: 'same-origin',
  })
);

// User Post Routes
export const getFeaturedPosts = () => (
  fetch('/api/user/posts', { method: 'GET', credentials: 'same-origin' })
    .then(resp => resp.json())
);

export const getUserPosts = (id, lastPostDate) => (
  fetch(`/api/user/posts/${id}/${lastPostDate}`, { method: 'GET', credentials: 'same-origin' })
    .then(resp => resp.json())
);

export const getNewUserPosts = (id, numOfPosts) => (
  fetch(`/api/user/posts/new/${id}/${numOfPosts}`, { method: 'GET', credentials: 'same-origin' })
    .then(resp => resp.json())
);

export const addPost = post => (
  fetch('/api/user/posts', {
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
  fetch(`/api/user/posts/${id}`, { method: 'DELETE', credentials: 'same-origin' })
    .then(resp => resp.json())
);

export const likePost = id => (
  fetch(`/api/user/posts/${id}/like`, { method: 'PUT', credentials: 'same-origin' })
    .then(resp => resp.json())
);

export const unlikePost = id => (
  fetch(`/api/user/posts/${id}/unlike`, { method: 'PUT', credentials: 'same-origin' })
    .then(resp => resp.json())
);

// Homepage Post Routes
export const getHomepagePosts = lastPostDate => (
  fetch(`/api/following/posts/${lastPostDate}`, { method: 'GET', credentials: 'same-origin' })
    .then(resp => resp.json())
);

export const getNewHomepagePosts = numOfPosts => (
  fetch(`/api/following/posts/new/${numOfPosts}`, { method: 'GET', credentials: 'same-origin' })
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
