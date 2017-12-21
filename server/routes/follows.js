const express = require('express');
const Follow = require('../models/follow');
const middleware = require('../middleware');

const router = express.Router();

// GET USER FOLLOWING
router.get('/following/:userID', (req, res) => {
  Follow.find({ 'user.id': req.params.userID }, { _id: 0, following: 1 }, (err, following) => {
    if (err) {
      res.status(400).send(err);
    } else {
      const formattedFollowing = following.map(follow => follow.following);
      console.log(formattedFollowing);
      res.json({ following: formattedFollowing });
    }
  });
});

// GET USER FOLLOWERS
router.get('/followers/:userID', (req, res) => {
  Follow.find({ 'following.id': req.params.userID }, { _id: 0, user: 1 }, (err, followers) => {
    if (err) {
      res.status(400).send(err);
    } else {
      const formattedFollowers = followers.map(follow => follow.user);
      res.json({ followers: formattedFollowers });
    }
  });
});

// CREATE NEW FOLLOWER
router.post('/follow', middleware.isLoggedin, (req, res) => {
  const { id, username, name } = req.body;
  const user = {
    id: req.user._id,
    username: req.user.username,
    name: req.user.name,
  };
  const following = {
    id,
    username,
    name,
  };
  const newFollow = { user, following };
  Follow.create(newFollow, (err, createdFollow) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ follow: createdFollow });
    }
  });
});

// DELETE FOLLOWER
router.delete('/unfollow/:followingID', middleware.isLoggedin, (req, res) => {
  const userID = req.user._id;
  Follow.remove({ 'user.id': userID, 'following.id': req.params.followingID }, (err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
