const express = require('express');
const Post = require('../models/post');
const middleware = require('../middleware');

const router = express.Router();

const fetchCount = 10;

// GET ALL HOMEPAGE POSTS (FOLLOWING AND USER)
router.get('/:lastDate', middleware.isLoggedin, middleware.getFollowing, (req, res) => {
  const findQuery = {};
  findQuery.author = { $in: res.following };
  if (req.params.lastDate !== 'first fetch') {
    findQuery.date = { $lt: req.params.lastDate };
  }
  Post.find(findQuery, { 'likes._id': 0 }, { sort: { date: -1 }, limit: fetchCount }).populate('author').exec((error, allPosts) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.json({ posts: allPosts });
    }
  });
});

// GET NEW HOMEPAGE POSTS (FOLLOWING AND USER)
router.get('/new/:numOfPosts', middleware.isLoggedin, middleware.getFollowing, (req, res) => {
  Post.find({ author: { $in: res.following } }, { 'likes._id': 0 }, { sort: { date: -1 }, limit: parseInt(req.params.numOfPosts, 10) }).populate('author').exec((err, newPosts) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ newPosts });
    }
  });
});

module.exports = router;
