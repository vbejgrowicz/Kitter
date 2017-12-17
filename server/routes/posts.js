const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// GET ALL POSTS
router.get('/', (req, res) => {
  Post.find({}, null, {sort: {date: -1}}, (err, allPosts) => {
    if (err){
      console.log(err);
    } else {
      res.json({ allPosts: allPosts });
    }
  });
});

// GET NEW POSTS FROM ALL POSTS
router.get('/new/:numOfPosts', (req, res) => {
  Post.find({}, null, {sort: {date: -1}, limit: parseInt(req.params.numOfPosts)}, (err, newPosts) => {
    if (err){
      console.log(err);
    } else {
      res.json({ newPosts: newPosts });
    }
  });
});

// GET USER POSTS
router.get('/:userID', (req, res) => {
  Post.find({ "author.id": req.params.userID }, null, {sort: {date: -1}}, (err, userPosts) => {
    if (err){
      console.log(err);
    } else {
      res.json({ userPosts: userPosts });
    }
  });
});

// CREATE NEW POST
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

// DELETE POST
router.delete('/:postID', (req, res) => {
  Post.findByIdAndRemove(req.params.postID, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ message: 'Your Meow has been deleted' });
    }
  });
});

module.exports = router;
