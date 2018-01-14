# Kitter

## Minimum Viable Product

Kitter is a web application inspired by Twitter.  
This app was built using Express and React.js.
Kitter allows users to:

- [X] Sign up for an account
- [X] Log in and log out of their accounts
- [X] Create and Delete posts
- [X] Follow and unfollow users
- [X] View user profiles with their posts
- [X] View timeline of all followed users posts
- [X] Display followed/following user list
- [X] Add User Image

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
- [X] Create Post API for index, create, show, destroy
- [X] Create Redux Post Store
- [X] Create all Post actions
- [X] Create the associated functions within the reducer to handle the created actions
- [X] Create React components PostList, PostItem, PostNewForm

### Phase 7: Follower setup

**Objective:** Users can be followed and unfollowed

- [X] Create `Follower` model
- [X] Create Follower API for create and destroy
- [X] Create Follower actions
- [X] Create the associated functions to handle the created actions
- [X] Create React components UserList, UserItem
- [X] Create routes to show list of users followed or following

### Phase 8: User Image setup

**Objective:** Users can add profile image

- [X] Add image to `User` model
- [X] Create image API route for create
- [X] Create add image action
- [X] Create the associated functions to handle the created actions
- [X] Create React components UserImage, NewUserImageForm

### Phase 9: Final Touches and Testing

**Objective:** Application has a clean professional look and operates smoothly.

- [X] Add remaining CSS styling to clean up visually
- [X] Add media query to provide mobile responsive look
- [X] Add seed data to provide a list of posts on guest login
- [X] Obtain feedback from other users
