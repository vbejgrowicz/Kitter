const User = require('../models/user');
const Follow = require('../models/follow');

const followData = [
  {
    user: 'Guest',
    list: ['MrSmalz', 'CatFacts'],
  },
  {
    user: 'MrSmalz',
    list: ['CatFacts'],
  },
  {
    user: 'CatFacts',
    list: ['Guest'],
  },
];

const seedFollows = () => {
};

module.exports = seedFollows;
