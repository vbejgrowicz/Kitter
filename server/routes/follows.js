const express = require('express');
const Follow = require('../models/follow');
const middleware = require('../middleware');

const router = express.Router();

// CREATE NEW FOLLOWER
router.post('/follow', middleware.isLoggedin, (req, res) => {
  const user = req.user._id;
  const following = req.body._id;
  const newFollow = { user, following };
  Follow.create(newFollow, (err, createdFollow) => {
    if (err) {
      res.status(400).send(err);
    } else {
      Follow.findOne({ _id: createdFollow._id }, { _id: 0, following: 1 }).populate('following').exec((error, follow) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.json({ follow });
        }
      });
    }
  });
});

// DELETE FOLLOWER
router.delete('/unfollow/:followingID', middleware.isLoggedin, (req, res) => {
  const userID = req.user._id;
  Follow.remove({ user: userID, following: req.params.followingID }, (err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ userID });
    }
  });
});

module.exports = router;
