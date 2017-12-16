const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// GET ALL POST COUNT
router.get('/posts', (req, res)=> {
  Post.count({}).exec((err, count) => {
    if (err) {
      console.log(err)
    } else {
      res.json({ count: count });
    }
  });
});

// GET USER POST COUNT
router.get('/:userID/posts', (req, res)=> {
  Post.count({ "author.id": req.params.userID }).exec((err, count) => {
    if (err) {
      console.log(err)
    } else {
      res.json({ count: count });
    }
  });
});

module.exports = router;
