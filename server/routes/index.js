const express = require('express');
const passport = require('passport');
const User = require('../models/user');

const router = express.Router();

router.get('/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ username: req.user.username, id: req.user._id, name: req.user.name, image: req.user.image });
  } else {
    res.json({ username: null, id: null, name: null });
  }
});

router.get('/users/:username', (req, res) => {
  User.findOne({ username: req.params.username }, (err, user) => {
    if (err) {
      res.status(400).send(err);
    } else if (user === null) {
      res.json({ user });
    } else {
      res.json({ username: user.username, id: user._id, name: user.name, image: user.image });
    }
  });
});

// SIGN UP ROUTE
router.post('/signup', (req, res) => {
  const newUser = new User({ username: req.body.username, name: req.body.name });
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      res.status(400).send(err);
    } else {
      passport.authenticate('local')(req, res, () => {
        res.json({ username: user.username, id: user._id, name: user.name, image: user.image });
      });
    }
  });
});

// LOGIN ROUTE
router.post('/login', (req, res) => {
  passport.authenticate('local')(req, res, () => {
    res.json({ username: req.user.username, id: req.user._id, name: req.user.name, image: req.user.image  });
  });
});

// LOGOUT ROUTE
router.get('/logout', (req, res) => {
  req.logout();
  res.json({ username: null, id: null, name: null, image: null });
});

module.exports = router;
