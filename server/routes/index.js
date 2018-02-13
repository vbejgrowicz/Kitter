const express = require('express');
const passport = require('passport');
const User = require('../models/user');

const router = express.Router();

router.get('/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.json({ message: 'User not Authenticated!' });
  }
});

router.get('/users/:username', (req, res) => {
  User.findOne({ username: { $regex: req.params.username, $options: 'i' } }, (err, user) => {
    if (!user) {
      res.json({ message: 'Not Found' });
    } else {
      res.json({ user });
    }
  });
});

// SIGN UP ROUTE
router.post('/signup', (req, res) => {
  const newUser = new User({ userID: req.body.username, username: req.body.username, name: req.body.name });
  User.register(newUser, req.body.password, (err) => {
    if (err) {
      if (err.errors && err.errors.name) {
        return res.json(err.errors.name);
      }
      return res.json(err);
    }
    return passport.authenticate('local')(req, res, () => {
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

// LOGIN ROUTE
router.post('/login', (req, res) => {
  passport.authenticate('local', (err, user) => {
    if (!user) {
      return res.json({ message: 'The username and password you entered did not match our records. Please double-check and try again.' });
    }
    return req.login(user, () => {
      const userData = {
        _id: user._id,
        username: user.username,
        name: user.name,
        image: user.image,
      };
      return res.json({ user: userData });
    });
  })(req, res);
});

// LOGOUT ROUTE
router.get('/logout', (req, res) => {
  req.logout();
  res.json({ message: 'User was successfully logged out.' });
});

module.exports = router;
