const mongoose = require('mongoose');
const seedUsers = require('./seedUsers');
const seedFollows = require('./seedFollows');

const seedUserBasedData = () => {
  seedFollows();
  // TO DO: Seed Posts
};

const seedDB = () => {
  mongoose.connection.dropDatabase();
  seedUsers(seedUserBasedData);
};

module.exports = seedDB;
