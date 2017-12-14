# Kitter

## Minimum Viable Product

Kitter is a web application inspired by Twitter.  
This app was built using Express and React.js.
Kitter allows users to:

- [X] Sign up for an account
- [X] Log in and log out of their accounts
- [X] Create posts
- [ ] Delete posts
- [ ] Follow and unfollow users
- [X] View user profiles
- [ ] View timeline of posts of all followed users

## Implementation Timeline

### Phase 1: Landing Page

**Objective:** Complete basic landing page 

- [X] Create landing page with post previews
- [X] Set up generic seed data for what's happening posts
- [X] Create user sign up and login buttons
- [X] CSS styling of landing page

### Phase 2: User authentication

**Objective:** Users can sign up and login

- [X] Create `User` model
- [X] Set up user log in and sign up routes
- [X] Create log in and sign up pages
- [X] Direct users to blank root page upon signing in
- [X] CSS styling of login/sign up page

### Phase 3: Overall navigational setup

**Objective:** Navigation header bar on screen and functional

- [X] Create React component Navbar
- [X] Create React component for post from navbar
- [X] Create React component for user dropdown
- [X] Set up user log out route
- [X] CSS styling to make header bar

### Phase 4: Home page

**Objective:** Home page

- [X] Create React component for Homepage
- [X] Create React component for Homepage Infor
- [X] Create React component for Homepage Post Feed
- [X] Basic CSS styling for Home Page

### Phase 5: User Profile page

**Objective:** User Profile page

- [X] Create React component for User Profile Page
- [X] Create React component for Profile Info
- [X] Create React component for Profile Feed
- [X] Basic CSS styling for User Profile Page

### Phase 6: Post creation

**Objective:** Posts can be created

- [X] Create `Post` model 
- [ ] Create Post API for index, create, show, destroy
- [X] Create Redux Post Store
- [ ] Create all Post actions
- [ ] Create the associated functions within the reducer to handle the created actions
- [X] Create React components PostList, PostItem, PostNewForm
- [ ] Set up Post seed data

### Phase 7: Follower setup

**Objective:** Users can be followed and unfollowed

- [ ] Create Follower API for create and destroy
- [ ] Create Redux Follower Store
- [ ] Create Follower actions
- [ ] Create the associated functions to handle the created actions
- [ ] Create React components FollowerIndex, FollowerIndexItem

### Phase 8: Final Touches and Testing

**Objective:** Application has a clean professional look and operates smoothly.

- [ ] Add CSS styling to clean up visually
- [ ] Obtain feedback from other users
