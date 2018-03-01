const express = require('express');
const Post = require('../models/post');
const middleware = require('../middleware');

const router = express.Router();

// CREATE NEW POST
router.post('/', middleware.isLoggedin, (req, res) => {
  const { text } = req.body;
  const author = req.user._id;
  const newPost = { text, author };
  Post.create(newPost, (err, createdPost) => {
    if (err) {
      res.status(400).send(err);
    } else {
      Post.findOne({ _id: createdPost._id }).populate('author').exec((error, post) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.json({ post });
        }
      });
    }
  });
});

// DELETE POST
router.delete('/:postID', middleware.checkPostAuthor, (req, res) => {
  Post.findByIdAndRemove(req.params.postID, (err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ message: 'Your Meow has been deleted' });
    }
  });
});

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
