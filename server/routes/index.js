const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../models/user');


router.get('/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  }
});

// SIGN UP ROUTE
router.post('/signup', (req, res) => {
  const newUser = new User({username: req.body.username, name: req.body.name});
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      res.json(err);
    } else {
      passport.authenticate('local')(req, res, () => {
        res.json(user);
      });
    }
  });
});

// LOGIN ROUTE
router.post('/login', (req, res) => {
  passport.authenticate('local')(req, res, () => {
    res.json(req.user);
  });
});

module.exports = router;
