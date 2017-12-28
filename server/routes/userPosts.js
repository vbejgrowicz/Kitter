const express = require('express');
const Post = require('../models/post');
const middleware = require('../middleware');

const router = express.Router();

// GET USER POSTS
router.get('/:userID', (req, res) => {
  Post.find({ 'author.id': req.params.userID }, null, { sort: { date: -1 } }, (err, userPosts) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ posts: userPosts });
    }
  });
});

// GET NEW USER POSTS
router.get('/new/:userID/:numOfPosts', (req, res) => {
  Post.find({ 'author.id': req.params.userID }, null, { sort: { date: -1 }, limit: parseInt(req.params.numOfPosts, 10) }, (err, newPosts) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ newPosts });
    }
  });
});

// CREATE NEW POST
router.post('/', middleware.isLoggedin, (req, res) => {
  const { text } = req.body;
  const author = {
    id: req.user._id,
    username: req.user.username,
    name: req.user.name,
  };
  const newPost = { text, author };
  Post.create(newPost, (err, createdPost) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ post: createdPost });
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
router.put('/:postID', middleware.isLoggedin, (req, res) => {
  const user = {
    id: req.user._id,
    username: req.user.username,
    name: req.user.name,
  };
  Post.findByIdAndUpdate(req.params.postID, { $push: { likes: user } }, (err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ user });
    }
  });
});

module.exports = router;
