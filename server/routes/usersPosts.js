const express = require('express');
const Post = require('../models/post');
const middleware = require('../middleware');

const router = express.Router({ mergeParams: true });

router.get('/', middleware.getFollowing, (req, res) => {
  const findQuery = {};
  const count = parseInt(req.query.limit, 10) || 10;
  if (req.query.date !== 'first fetch') {
    findQuery.date = { $lt: req.query.date };
  }
  findQuery.author = req.query.type === 'feed' ? { $in: res.following } : req.params.id;
    });
  } else {
  }
  Post.find(findQuery, { 'likes._id': 0 }, { sort: { date: -1 }, limit: count }).populate('author').exec((err, posts) => {
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
