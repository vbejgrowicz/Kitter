const express = require('express');
const User = require('../models/user');

const router = express.Router();

// SEARCH BY STRING
router.get('/', (req, res) => {
  const query = { $regex: req.query.keyword, $options: 'i' };
  User.find({ $or: [{ username: query }, { name: query }] }, (err, users) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ results: users });
    }
  });
});

module.exports = router;
