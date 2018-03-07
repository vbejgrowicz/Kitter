const jsonHeaders = { 'Content-Type': 'application/json' };

const init = (method, body, headers) => (
  {
    method,
    credentials: 'same-origin',
    headers,
    body,
  }
);

const getRoute = route => fetch(route, init('GET')).then(resp => resp.json());

const postRoute = (route, body, headers) => fetch(route, init('POST', body, headers)).then((resp) => {
  if (resp.ok) {
    return resp.json();
  }
  return ('Error');
});

const putRoute = (route, body, headers) => fetch(route, init('PUT', body, headers)).then(resp => resp.json());

const deleteRoute = (route, body, headers) => fetch(route, init('DELETE', body, headers)).then(resp => resp.json());

// Session
export const getSessionUser = () => getRoute('/api/session');

export const logIn = user => postRoute('/api/session', JSON.stringify(user), jsonHeaders);

export const logOut = () => deleteRoute('/api/session');

// User
export const signUp = newUser => postRoute('/api/users', JSON.stringify(newUser), jsonHeaders);

export const findUser = username => getRoute(`/api/users?username=${username}`);

// Search
export const searchFor = string => getRoute(`/api/search?keyword=${string}`);

// Posts
export const getFeaturedPosts = () => getRoute('api/posts?type=featured');

// User Posts
export const getUserPosts = (type, id, lastPostDate) => getRoute(`/api/users/${id}/posts?type=${type}&date=${lastPostDate}`);

export const getNewUserPosts = (type, id, numOfPosts) => getRoute(`/api/users/${id}/posts?type=${type}limit=${numOfPosts}`);

export const getNumPosts = (type, id) => getRoute(`/api/users/${id}/posts?type=${type}&count=true`);

export const addPost = (id, text) => postRoute(`api/users/${id}/posts`, JSON.stringify({ text }), jsonHeaders);

export const removePost = (id, postId) => deleteRoute(`api/users/${id}/posts/${postId}`);

export const updateLikes = (id, postId, action) => putRoute(`/api/posts/${postId}/likes?user=${id}&action=${action}`);

// Images
export const addProfileImage = formData => putRoute('/api/image/profile', formData);

export const removeProfileImage = () => putRoute('/api/image/remove');

// User Follows
export const getUserFollows = (id, action) => getRoute(`/api/users/${id}/follows?action=${action}`);

export const getNumFollows = (id, action) => getRoute(`/api/users/${id}/follows?action=${action}&count=true`);

export const follow = (id, user) => postRoute(`api/users/${id}/follows/`, JSON.stringify({ following: user }), jsonHeaders);

export const unfollow = (id, user) => deleteRoute(`api/users/${id}/follows/${user}`);
