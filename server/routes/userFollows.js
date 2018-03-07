const express = require('express');
const Follow = require('../models/follow');
const middleware = require('../middleware');

const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
  const findQuery = {};
  const type = req.query.action === 'following' ? 'following' : 'user';
  if (req.query.action === 'following') {
    findQuery.user = req.params.id;
  } else if (req.query.action === 'followers') {
    findQuery.following = req.params.id;
  }
  if (req.query.count) {
    Follow.count(findQuery).exec((err, count) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.json({ count });
      }
    });
  } else {
    Follow.find(findQuery, { _id: 0, [type]: 1 }).populate(type).exec((err, list) => {
      if (err) {
        res.status(400).send(err);
      } else {
        const formattedList = list.map(follow => follow[type]);
        res.json({ list: formattedList });
      }
    });
  }
});

router.post('/', middleware.isLoggedin, (req, res) => {
  const newFollow = { user: req.params.id, following: req.body.following };
  Follow.create(newFollow, (err, createdFollow) => {
    if (err) {
      res.status(400).send(err);
    } else {
      Follow.findOne({ _id: createdFollow._id }, { _id: 0, following: 1 }).populate('following').exec((error, follow) => {
        if (err) {
          res.status(400).send(err);
        } else {
          res.json({ follow });
        }
      });
    }
  });
});

router.delete('/:followingID', middleware.isLoggedin, (req, res) => {
  const user = req.params.id;
  Follow.remove({ user, following: req.params.followingID }, (err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ user });
    }
  });
});

module.exports = router;
