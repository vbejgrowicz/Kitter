const User = require('../models/user');
const Post = require('../models/post');
const data = require('./data');

const seedPosts = () => {
  data.forEach((item) => {
    User.findOne({ username: item.username }, (errOne, mainUser) => {
      item.posts.forEach((postItem) => {
        const { text, date } = postItem;
        const author = mainUser._id;
        const newPost = { text, date, author };
        Post.create(newPost, (error) => {
          if (error) {
            console.log(error);
          }
        });
      });
    });
  });
  console.log('All Posts Added');
};

module.exports = seedPosts;
