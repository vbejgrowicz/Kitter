const express = require('express');
const Post = require('../models/post');
const middleware = require('../middleware');

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

router.put('/:postId/likes', middleware.isLoggedin, (req, res) => {
  const { user } = req.query;
  if (req.user._id.equals(user)) {
    Post.findById(req.params.postId, (err, post) => {
      const isLiked = post.likes.some(like => like.equals(user));
      if (err) {
        res.status(400).send(err);
      } else if (isLiked && req.query.action === 'unlike') {
        post.likes.pull(user);
        post.save();
        res.json({ post });
      } else if (req.query.action === 'like') {
        post.likes.push(user);
        post.save();
        res.json({ post });
      }
    });
  }
});

module.exports = router;
