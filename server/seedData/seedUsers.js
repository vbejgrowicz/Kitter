const User = require('../models/user');

const userData = [
  {
    name: 'Guest Account',
    username: 'Guest',
    password: 'Password',
    image: null,
  },
  {
    name: 'Mr. Smalz',
    username: 'TheRealBadKitty',
    password: 'Password',
    image: 'https://s3.amazonaws.com/kitter-profile-images/1515448640969',
  },
  {
    name: 'Cat Facts',
    username: 'CatFacts',
    password: 'Password',
    image: 'https://images.unsplash.com/photo-1493548578639-b0c241186eb0?auto=format&fit=crop&w=2250&q=80',
  },
  {
    name: 'AllCats',
    username: 'Cats',
    password: 'Password',
    image: null,
  },
];

const seedUsers = (addUserBasedData) => {
  let usersAdded = 0;
  userData.forEach((seed) => {
    const newUser = new User({ username: seed.username, name: seed.name, image: seed.image });
    User.register(newUser, seed.password, (err) => {
      if (err) {
        console.log(err);
      } else {
        usersAdded += 1;
        if (usersAdded === userData.length) {
          console.log('All Users Added');
          addUserBasedData();
        }
      }
    });
  });
};

module.exports = seedUsers;
