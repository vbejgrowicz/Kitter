const mongoose = require('mongoose');
const seedUsers = require('./seedUsers');
const seedFollows = require('./seedFollows');
const seedPosts = require('./seedPosts');

const seedUserBasedData = () => {
  seedFollows();
  seedPosts();
};

const seedDB = () => {
  mongoose.connection.dropDatabase();
  seedUsers(seedUserBasedData);
};

module.exports = seedDB;
