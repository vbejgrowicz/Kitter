const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', (req, res) => {
  Post.find({}, (err, allPosts) => {
    if (err){
      console.log(err);
    } else {
      res.json({ allPosts: allPosts });
    }
  });
});

router.get('/:id', (req, res) => {
  Post.find({ "author.id": req.params.id }, (err, userPosts) => {
    if (err){
      console.log(err);
    } else {
      res.json({ userPosts: userPosts });
    }
  });
});

// CREATE - create new post
router.post('/', (req, res) => {
  const text = req.body.text;
  const author = {
    id: req.user._id,
    username: req.user.username,
    name: req.user.name
  };
  const newPost = { text: text, author: author};
  Post.create(newPost, (err, createdPost) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ post: createdPost });
    }
  });
});

module.exports = router;
