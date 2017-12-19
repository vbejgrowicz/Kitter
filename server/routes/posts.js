const express = require('express');
const Post = require('../models/post');
const middleware = require('../middleware');

const router = express.Router();

// GET ALL POSTS
router.get('/', (req, res) => {
  Post.find({}, null, { sort: { date: -1 } }, (err, allPosts) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ posts: allPosts });
    }
  });
});

// GET NEW POSTS FROM ALL POSTS
router.get('/new/:numOfPosts', (req, res) => {
  Post.find({}, null, { sort: { date: -1 }, limit: parseInt(req.params.numOfPosts) }, (err, newPosts) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ newPosts });
    }
  });
});

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

module.exports = router;
