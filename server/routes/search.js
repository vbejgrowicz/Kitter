const express = require('express');
const User = require('../models/user');

const router = express.Router();

// SEARCH BY STRING
router.get('/', (req, res) => {
  const string = req.query.keyword;
  const usernameQuery = { $regex: string, $options: 'i' };
  const nameQuery = { $regex: string, $options: 'i' };
  User.find({ $or: [{ username: usernameQuery }, { name: nameQuery }] }, (err, users) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ results: users });
    }
  });
});

module.exports = router;
