const Post = require('../models/post');
const Follow = require('../models/follow');

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
      } else if (foundPost.author.equals(req.user._id)) {
        return next();
      }
      return res.sendStatus(400);
    });
  }
};

const getFollowing = (req, res, next) => {
  const userID = req.user._id;
  Follow.find({ user: userID }, { _id: 0, following: 1 }, (err, followers) => {
    if (err) {
      res.status(400).send(err);
    } else {
      const formattedFollowers = followers.map(follow => follow.following);
      res.following = formattedFollowers.concat(userID);
      return next();
    }
    return res.sendStatus(400);
  });
};

module.exports = { isLoggedin, checkPostAuthor, getFollowing };
