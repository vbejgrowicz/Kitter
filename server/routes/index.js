const express = require('express');
const passport = require('passport');
const User = require('../models/user');

const router = express.Router();

router.get('/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

router.get('/users/:username', (req, res) => {
  User.findOne({ username: req.params.username }, (err, user) => {
    if (err) {
      res.status(400).send(err);
    } else if (user === null) {
      res.json({ user });
    } else {
      res.json({ user });
    }
  });
});

// FIND USER BY STRING
router.get('/users/search/:string', (req, res) => {
  const string = req.params.string.replace(/&#46;/g, '.');
  const regexString = string.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  const usernameQuery = { $regex: regexString, $options: 'i' };
  const nameQuery = { $regex: regexString, $options: 'i' };
  User.find({ $or: [{ username: usernameQuery }, { name: nameQuery }] }, (err, users) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ users });
    }
  });
});

// SIGN UP ROUTE
router.post('/signup', (req, res) => {
  const newUser = new User({ username: req.body.username, name: req.body.name });
  User.register(newUser, req.body.password, (err) => {
    if (err) {
      res.json(err);
    } else {
      passport.authenticate('local')(req, res, () => {
        const userData = {
          _id: req.user._id,
          username: req.user.username,
          name: req.user.name,
          image: req.user.image,
        };
        res.json({ user: userData });
      });
    }
  });
});

// LOGIN ROUTE
router.post('/login', (req, res) => {
  passport.authenticate('local')(req, res, () => {
    const userData = {
      _id: req.user._id,
      username: req.user.username,
      name: req.user.name,
      image: req.user.image,
    };
    res.json({ user: userData });
  });
});

// LOGOUT ROUTE
router.get('/logout', (req, res) => {
  req.logout();
  const userData = {
    _id: null,
    username: null,
    name: null,
    image: null,
  };
  res.json({ user: userData });
});

module.exports = router;
