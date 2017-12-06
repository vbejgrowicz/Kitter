const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../models/user');

// SIGN UP ROUTE
router.post('/signup', (req, res) => {
  console.log(req.body);
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
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}), (req, res) => {
});

module.exports = router;
