const express = require('express');
const Post = require('../models/post');
const middleware = require('../middleware');

const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
  const findQuery = {};
  const count = parseInt(req.query.limit, 10) || 10;
  if (req.query.date !== 'first fetch') {
    findQuery.date = { $lt: req.query.date };
  }
  if (req.query.type === 'all') {
    middleware.getFollowing(req, res, () => {
      findQuery.author = { $in: res.following };
    });
  } else {
    findQuery.author = req.params.id;
  }
  Post.find(findQuery, { 'likes._id': 0 }, { sort: { date: -1 }, limit: count }).populate('author').exec((err, posts) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ posts });
    }
  });
});

module.exports = router;
