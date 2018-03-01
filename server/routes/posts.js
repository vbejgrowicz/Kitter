const express = require('express');
const Post = require('../models/post');

const router = express.Router();

router.get('/', (req, res) => {
  if (req.query.type === 'featured') {
    Post.aggregate([
      { $project: { like_count: { $size: '$likes' } } },
      { $sort: { like_count: -1 } },
      { $limit: 3 },
    ], (err, topPosts) => {
      Post.find({ _id: { $in: topPosts } }, { 'likes._id': 0 }, { sort: { date: -1 } }).populate('author').exec((error, posts) => {
        if (error) {
          res.status(400).send(error);
        } else {
          res.json({ posts });
        }
      });
    });
  }
});

module.exports = router;
