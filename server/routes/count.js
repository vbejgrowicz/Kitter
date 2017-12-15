const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// GET USER POST COUNT
router.get('/posts', (req, res)=> {
  Post.count({ "author.id": req.params.userID }).exec((err, count) => {
    if (err) {
      console.log(err)
    } else {
      res.json({ count: count });
    }
  });
});

module.exports = router;
