const express = require('express');
const Post = require('../models/post');
const middleware = require('../middleware');

const router = express.Router();

// GET ALL HOMEPAGE POSTS (FOLLOWING AND USER)
router.get('/', middleware.isLoggedin, middleware.getFollowing, (req, res) => {
  Post.find({ 'author.id': { $in: res.following } }, null, { sort: { date: -1 } }, (error, allPosts) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.json({ posts: allPosts });
    }
  });
});

// GET NEW HOMEPAGE POSTS (FOLLOWING AND USER)
router.get('/new/:numOfPosts', middleware.isLoggedin, middleware.getFollowing, (req, res) => {
  Post.find({ 'author.id': { $in: res.following } }, null, { sort: { date: -1 }, limit: parseInt(req.params.numOfPosts, 10) }, (err, newPosts) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ newPosts });
    }
  });
});

module.exports = router;
