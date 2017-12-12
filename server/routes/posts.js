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

// CREATE - create new post
router.post('/', (req, res) => {
  const text = req.body.text;
  const author_id = req.user._id;
  const author_username = req.user.username;
  const timePosted = new Date();
  const newPost = { text: text, author_id: author_id, author_username: author_username, timePosted: timePosted};
  Post.create(newPost, (err, createdPost) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ post: createdPost });
    }
  });
});

module.exports = router;
