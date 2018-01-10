const User = require('../models/user');
const Follow = require('../models/follow');

const followData = [
  {
    user: 'Guest',
    list: ['TheRealBadKitty', 'CatFacts'],
  },
  {
    user: 'TheRealBadKitty',
    list: ['CatFacts'],
  },
  {
    user: 'CatFacts',
    list: ['Guest'],
  },
];

const seedFollows = () => {
  followData.forEach((item) => {
    User.findOne({ username: item.user }, (errOne, mainUser) => {
      item.list.forEach((userItem) => {
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
