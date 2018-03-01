const express = require('express');
const passport = require('passport');
const middleware = require('../middleware');

const router = express.Router();

router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.json({ message: 'User not Authenticated!' });
  }
});

router.post('/', middleware.usernameFormatting, (req, res) => {
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

router.delete('/', (req, res) => {
  req.logout();
  res.json({ message: 'User was successfully logged out.' });
});

module.exports = router;
