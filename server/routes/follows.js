const express = require('express');
const Follow = require('../models/follow');

const router = express.Router();

// CREATE NEW FOLLOWER
router.post('/', (req, res) => {
  const { id, username, name } = req.body;
  const user = {
    id: req.user._id,
    username: req.user.username,
    name: req.user.name,
  };
  const following = {
    id,
    username,
    name,
  };
  const newFollow = { user, following };
  Follow.create(newFollow, (err, createdFollow) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ follow: createdFollow });
    }
  });
});
module.exports = router;
