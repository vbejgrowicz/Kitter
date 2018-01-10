const User = require('../models/user');
const Follow = require('../models/follow');
const data = require('./data');

const seedFollows = () => {
  data.forEach((item) => {
    User.findOne({ username: item.username }, (errOne, mainUser) => {
      item.follows.forEach((userItem) => {
        User.findOne({ username: userItem }, (errTwo, followedUser) => {
          const user = mainUser._id;
          const following = followedUser._id;
          const newFollow = { user, following };
          Follow.create(newFollow, (error) => {
            if (error) {
              console.log(error);
            }
          });
        });
      });
    });
  });
  console.log('All Follows Added');
};

module.exports = seedFollows;
