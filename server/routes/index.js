const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../models/user');

// SIGN UP ROUTE
router.post('/signup', (req, res) => {
  const newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      res.json({ success: false, message: `${err.message}`});
    } else {
      passport.authenticate('local')(req, res, () => {
        res.json({ success: true, message: `${user.username} was created!`});
      });
    }
  });
});

// login logic
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}), (req, res) => {
});

module.exports = router;
