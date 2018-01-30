const getInit = {
  method: 'GET',
  credentials: 'same-origin',
};

const get = route => fetch(route, getInit).then(resp => resp.json());

// User
export const checkUser = () => get('/api/user');

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

export const logOut = () => get('/api/logout');

export const findUser = username => get(`/api/users/${username}`);

// Images
export const addProfileImage = formData => (
  fetch('/api/image/profile', {
    method: 'PUT',
    credentials: 'same-origin',
    body: formData,
  })
    .then(resp => resp.json())
);

export const removeProfileImage = () => (
  fetch('/api/image/remove', {
    method: 'PUT',
    credentials: 'same-origin',
  })
    .then(resp => resp.json())
);

// Follow
export const getFollowers = userID => get(`/api/follows/followers/${userID}`);

export const getFollowing = userID => get(`/api/follows/following/${userID}`);

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
export const getFeaturedPosts = () => get('api/user/posts');

export const getUserPosts = (id, lastPostDate) => get(`/api/user/posts/${id}/${lastPostDate}`);

export const getNewUserPosts = (id, numOfPosts) => get(`/api/user/posts/new/${id}/${numOfPosts}`);

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
export const getHomepagePosts = lastPostDate => get(`/api/following/posts/${lastPostDate}`);

export const getNewHomepagePosts = numOfPosts => get(`/api/following/posts/new/${numOfPosts}`);

// Counts
export const getNumPosts = id => get(`/api/count/${id}/posts`);

export const getTotalNumPosts = () => get('/api/count/posts');

export const getFollowingCount = id => get(`/api/count/${id}/following`);

export const getFollowerCount = id => get(`/api/count/${id}/follower`);
