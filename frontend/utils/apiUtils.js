const jsonHeaders = {
  'Content-Type': 'application/json',
};

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

// User
export const checkUser = () => getRoute('/api/user');

export const signUp = newUser => postRoute('/api/signup', JSON.stringify(newUser), jsonHeaders);

export const logIn = user => postRoute('/api/login', JSON.stringify(user), jsonHeaders);

export const logOut = () => getRoute('/api/logout');

export const findUser = username => getRoute(`/api/users/${username}`);

// Images
export const addProfileImage = formData => putRoute('/api/image/profile', formData);

export const removeProfileImage = () => putRoute('/api/image/remove');

// Follow
export const getFollowers = userID => getRoute(`/api/follows/followers/${userID}`);

export const getFollowing = userID => getRoute(`/api/follows/following/${userID}`);

export const follow = user => postRoute('api/follows/follow', JSON.stringify(user), jsonHeaders);

export const unfollow = user => deleteRoute(`api/follows/unfollow/${user._id}`);

// User Post Routes
export const getFeaturedPosts = () => getRoute('api/user/posts');

export const getUserPosts = (id, lastPostDate) => getRoute(`/api/user/posts/${id}/${lastPostDate}`);

export const getNewUserPosts = (id, numOfPosts) => getRoute(`/api/user/posts/new/${id}/${numOfPosts}`);

export const addPost = text => postRoute('api/user/posts', JSON.stringify({ text }), jsonHeaders);

export const removePost = id => deleteRoute(`api/user/posts/${id}`);

export const likePost = id => putRoute(`/api/user/posts/${id}/like`);

export const unlikePost = id => putRoute(`/api/user/posts/${id}/unlike`);

// Homepage Post Routes
export const getHomepagePosts = lastPostDate => getRoute(`/api/following/posts/${lastPostDate}`);

export const getNewHomepagePosts = numOfPosts => getRoute(`/api/following/posts/new/${numOfPosts}`);

// Counts
export const getNumPosts = id => getRoute(`/api/count/${id}/posts`);

export const getTotalNumPosts = () => getRoute('/api/count/posts');

export const getFollowingCount = id => getRoute(`/api/count/${id}/following`);

export const getFollowerCount = id => getRoute(`/api/count/${id}/follower`);
