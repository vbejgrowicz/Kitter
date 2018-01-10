const User = require('../models/user');
const Post = require('../models/post');

// new Date(year, month, day, hours, minutes, seconds, milliseconds);

const postData = [
  {
    user: 'Guest',
    posts: [
      { text: "It's almost 2018!!", date: new Date(2017, 11, 31) },
      { text: 'HAPPY NEW YEAR! :)', date: new Date(2018, 0, 1) },
    ],
  },
  {
    user: 'MrSmalz',
    posts: [
      { text: 'Happy New Year!!', date: new Date(2018, 0, 1) },
      { text: 'Post 2!', date: new Date(2018, 0, 1, 1) },
    ],
  },
  {
    user: 'CatFacts',
    posts: [
      { text: 'First', date: new Date(2018, 0, 4) },
      { text: 'Second', date: new Date(2018, 0, 5) },
    ],
  },
];

const seedPosts = () => {
  postData.forEach((item) => {
    User.findOne({ username: item.user }, (errOne, mainUser) => {
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
