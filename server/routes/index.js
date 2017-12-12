const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../models/user');

router.get('/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({username: req.user.username, id: req.user._id, name: req.user.name});
  } else {
    res.json({username: null, id: null, name: null});
  }
});

router.get('/users/:username', (req, res) => {
  User.findOne({ username: req.params.username }, (err, user) => {
    if (err){
      console.log(err);
    } else {
      res.json({ user: user });
    }
  });
});

// SIGN UP ROUTE
router.post('/signup', (req, res) => {
  const newUser = new User({username: req.body.username, name: req.body.name});
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      res.json(err);
    } else {
      passport.authenticate('local')(req, res, () => {
        res.json({username: user.username, id: user._id, name: user.name});
      });
    }
  });
});

// LOGIN ROUTE
router.post('/login', (req, res) => {
  passport.authenticate('local')(req, res, () => {
    res.json({username: req.user.username, id: req.user._id, name: req.user.name});
  });
});

// LOGOUT ROUTE
router.get('/logout', (req, res) => {
  req.logout();
  res.json({username: null, id: null, name: null});
});

module.exports = router;
