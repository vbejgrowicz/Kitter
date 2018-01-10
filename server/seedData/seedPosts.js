const User = require('../models/user');
const Post = require('../models/post');

// new Date(year, month, day, hours, minutes, seconds, milliseconds);

const postData = [
  {
    user: 'Guest',
    posts: [
      { text: 'Hello Kitter!!', date: new Date(2017, 10, 30) },
    ],
  },
  {
    user: 'TheRealBadKitty',
    posts: [
      { text: "Just setting up my Kitter, can't wait to connect with all my friends around the world!", date: new Date(2017, 11, 1) },
      { text: 'I live with my humans in New York City', date: new Date(2017, 11, 1, 1) },
      { text: "It's snowing today! I like to chase the snow through the windows...but I'm tired now so I'll just take a nap.", date: new Date(2017, 11, 9) },
      { text: "It's Christmas! I got a new feather, a lazer pointer, and soooo many treats! Can I have the treats now!!", date: new Date(2017, 11, 25) },
      { text: 'I got to have a whole can of TUNA for dinner! Ah, I love TUNA!', date: new Date(2017, 11, 25, 17) },
      { text: 'Happy New Year!!!!! \nNew Year, Same Bad Kitty... ;)', date: new Date(2018, 0, 1) },
      { text: "It's so cold out...I'm just going to go sleep under the blankets all day....zzzzzzz", date: new Date(2018, 0, 1) },
      { text: "Okay, so It's 3 am and I am so hungry but my humans won't wake up and I have no food... \nWhat should I do...", date: new Date(2018, 0, 4, 3) },
      { text: "I've tried poking at them, meowing at them, and biting them but they won't get up to feed me!", date: new Date(2018, 0, 4, 3, 4) },
      { text: "Alright they finally fed me, so I guess I'll be okay but I still think they should have fed me when I asked...", date: new Date(2018, 0, 5) },
    ],
  },
  {
    user: 'CatFacts',
    posts: [
      { text: 'Hey! Follow us for all your latest Cat Facts.', date: new Date(2018, 0, 1) },
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
