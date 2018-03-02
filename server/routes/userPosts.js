const express = require('express');
const Post = require('../models/post');
const middleware = require('../middleware');

const router = express.Router();

// ADD LIKE
router.put('/:postID/like', middleware.isLoggedin, (req, res) => {
  const user = req.user._id;
  Post.findById(req.params.postID, (err, post) => {
    if (err) {
      res.status(400).send(err);
    } else {
      post.likes.push(user);
      post.save();
      res.json({ user });
    }
  });
});

// REMOVE LIKE
router.put('/:postID/unlike', middleware.isLoggedin, (req, res) => {
  const user = req.user._id;
  Post.findById(req.params.postID, (err, post) => {
    if (err) {
      res.status(400).send(err);
    } else {
      post.likes.pull(user);
      post.save();
      res.json({ user });
    }
  });
});

module.exports = router;
