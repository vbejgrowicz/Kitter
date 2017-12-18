const express = require('express');
const Post = require('../models/post');

const router = express.Router();

// GET ALL POST COUNT
router.get('/posts', (req, res) => {
  Post.count({}).exec((err, count) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ count });
    }
  });
});

// GET USER POST COUNT
router.get('/:userID/posts', (req, res) => {
  Post.count({ 'author.id': req.params.userID }).exec((err, count) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ count });
    }
  });
});

module.exports = router;
