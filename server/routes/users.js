const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const middleware = require('../middleware');

const router = express.Router();

router.get('/', (req, res) => {
  if (req.query.username) {
    User.findOne({ userID: req.query.username.toLowerCase() }, (err, user) => {
      if (!user) {
        res.json({ message: 'Not Found' });
      } else {
        res.json({ user });
      }
    });
  }
});

router.post('/', (req, res) => {
  const newUser = new User({
    userID: req.body.username,
    username: req.body.username,
    name: req.body.name,
  });
  User.register(newUser, req.body.password, (err) => {
    if (err) {
      if (err.errors) {
        if (err.errors.name) {
          return res.json(err.errors.name);
        } else if (err.errors.userID) {
          return res.json(err.errors.userID);
        }
      }
      return res.json(err);
    }
    return middleware.usernameFormatting(req, res, () => {
      passport.authenticate('local')(req, res, () => {
        const userData = {
          _id: req.user._id,
          username: req.user.username,
          name: req.user.name,
          image: req.user.image,
        };
        return res.json({ user: userData });
      });
    });
  });
});

module.exports = router;
