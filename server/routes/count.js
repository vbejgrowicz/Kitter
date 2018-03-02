const express = require('express');
const Follow = require('../models/follow');

const router = express.Router();

// GET USER FOLLOWING COUNT
router.get('/:userID/following', (req, res) => {
  Follow.count({ user: req.params.userID }).exec((err, count) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ count });
    }
  });
});

// GET USER FOLLOWER COUNT
router.get('/:userID/follower', (req, res) => {
  Follow.count({ following: req.params.userID }).exec((err, count) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ count });
    }
  });
});

module.exports = router;
