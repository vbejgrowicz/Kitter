const User = require('../models/user');
const data = require('./data');

const seedUsers = (addUserBasedData) => {
  let usersAdded = 0;
  data.forEach((seed) => {
    const newUser = new User({ username: seed.username, name: seed.name, image: seed.image });
    User.register(newUser, seed.password, (err) => {
      if (err) {
        console.log(err);
      } else {
        usersAdded += 1;
        if (usersAdded === data.length) {
          console.log('All Users Added');
          addUserBasedData();
        }
      }
    });
  });
};

module.exports = seedUsers;
