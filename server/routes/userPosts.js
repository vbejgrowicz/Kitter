const express = require('express');
const Post = require('../models/post');
const middleware = require('../middleware');

const router = express.Router();

const fetchCount = 10;

// GET USER POSTS
router.get('/:userID/:lastDate', (req, res) => {
  const findQuery = {};
  findQuery.author = req.params.userID;
  if (req.params.lastDate !== 'first fetch') {
    findQuery.date = { $lt: req.params.lastDate };
  }
  Post.find(findQuery, { 'likes._id': 0 }, { sort: { date: -1 }, limit: fetchCount }).populate('author').exec((err, userPosts) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ posts: userPosts });
    }
  });
});

// GET NEW USER POSTS
router.get('/new/:userID/:numOfPosts', (req, res) => {
  Post.find({ author: req.params.userID }, { 'likes._id': 0 }, { sort: { date: -1 }, limit: parseInt(req.params.numOfPosts, 10) }).populate('author').exec((err, newPosts) => {
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
  Post.findByIdAndUpdate(req.params.postID, { $push: { likes: user } }, (err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ user });
    }
  });
});

// REMOVE LIKE
router.put('/:postID/unlike', middleware.isLoggedin, (req, res) => {
  const user = req.user._id;
  Post.findByIdAndUpdate(req.params.postID, { $pull: { likes: user } }, (err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ user });
    }
  });
});

module.exports = router;
