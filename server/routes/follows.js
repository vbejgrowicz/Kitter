const express = require('express');
const Follow = require('../models/follow');

const router = express.Router();

// GET FOLLOWERS
router.get('/', (req, res) => {
  const userID = req.user._id;
  Follow.find({ 'user.id': userID }, { _id: 0, following: 1 }, (err, followers) => {
    if (err) {
      res.status(400).send(err);
    } else {
      const formattedFollowers = followers.map(follow => follow.following);
      res.json({ followers: formattedFollowers });
    }
  });
});

// CREATE NEW FOLLOWER
router.post('/follow', (req, res) => {
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
router.delete('/unfollow/:followingID', (req, res) => {
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
