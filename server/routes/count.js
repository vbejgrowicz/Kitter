const express = require('express');
const Post = require('../models/post');
const Follow = require('../models/follow');

const router = express.Router();

// GET ALL POST COUNT
router.get('/posts', (req, res) => {
  Post.count({}).exec((err, count) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ count });
    }
  });
});

// GET USER POST COUNT
router.get('/:userID/posts', (req, res) => {
  Post.count({ 'author.id': req.params.userID }).exec((err, count) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ count });
    }
  });
});

// GET USER FOLLOWING COUNT
router.get('/:userID/following', (req, res) => {
  Follow.count({ 'user.id': req.params.userID }).exec((err, count) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ count });
    }
  });
});

// GET USER FOLLOWER COUNT
router.get('/:userID/follower', (req, res) => {
  Follow.count({ 'following.id': req.params.userID }).exec((err, count) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ count });
    }
  });
});

module.exports = router;
