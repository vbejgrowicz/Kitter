const Post = require('../models/post');

const isLoggedin = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.sendStatus(400);
};

const checkPostAuthor = (req, res, next) => {
  if (req.isAuthenticated()) {
    Post.findById(req.params.postID, (err, foundPost) => {
      if (err) {
        return res.sendStatus(400);
      } else if (foundPost.author.id.equals(req.user._id)) {
        return next();
      }
      return res.sendStatus(400);
    });
  }
};

module.exports = { isLoggedin, checkPostAuthor };
