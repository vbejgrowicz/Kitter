// new Date(year, month, day, hours, minutes, seconds, milliseconds);

const data = [
  {
    name: 'Guest Account',
    username: 'Guest',
    password: 'Password',
    image: null,
    posts: [
      {
        text: 'Hello Kitter!!',
        date: new Date(2017, 10, 30),
      },
    ],
    follows: [
      'TheRealBadKitty',
      'CatFacts',
      'GrumpyCat',
    ],
  },
  {
    name: 'Mr. Smalz',
    username: 'TheRealBadKitty',
    password: 'Password',
    image: 'https://s3.amazonaws.com/kitter-profile-images/1515448640969',
    posts: [
      {
        text: "Just setting up my Kitter, can't wait to connect with all my friends around the world!",
        date: new Date(2017, 11, 1),
      },
      {
        text: 'I live with my humans in New York City',
        date: new Date(2017, 11, 1, 1),
      },
      {
        text: "It's snowing today! I like to chase the snow through the windows...but I'm tired now so I'll just take a nap.",
        date: new Date(2017, 11, 9),
      },
      {
        text: "It's Christmas! I got a new feather, a lazer pointer, and soooo many treats! Can I have the treats now!!",
        date: new Date(2017, 11, 25),
      },
      {
        text: 'I got to have a whole can of TUNA for dinner! Ah, I love TUNA!',
        date: new Date(2017, 11, 25, 17),
      },
      {
        text: 'Happy New Year!!!!! \nNew Year, Same Bad Kitty... ;)',
        date: new Date(2018, 0, 1),
      },
      {
        text: "It's so cold out...I'm just going to go sleep under the blankets all day....zzzzzzz",
        date: new Date(2018, 0, 1),
      },
      {
        text: "Okay, so It's 3 am and I am so hungry but my humans won't wake up and I have no food... \nWhat should I do...",
        date: new Date(2018, 0, 4, 3),
      },
      {
        text: "I've tried poking at them, meowing at them, and biting them but they won't get up to feed me!",
        date: new Date(2018, 0, 4, 3, 4),
      },
      {
        text: "Alright they finally fed me, so I guess I'll be okay but I still think they should have fed me when I asked...",
        date: new Date(2018, 0, 5),
      },
    ],
    follows: [
      'GrumpyCat',
      'CatFacts',
    ],
  },
  {
    name: 'Cat Facts',
    username: 'CatFacts',
    password: 'Password',
    image: 'https://images.unsplash.com/photo-1493548578639-b0c241186eb0?auto=format&fit=crop&w=2250&q=80',
    posts: [
      {
        text: 'Hey! Follow us for all your latest Cat Facts.',
        date: new Date(2018, 0, 1),
      },
    ],
    follows: [
      'TheRealBadKitty',
      'GrumpyCat',
    ],
  },
  {
    name: 'Tardar Sauce',
    username: 'GrumpyCat',
    password: 'Password',
    image: 'http://i0.kym-cdn.com/photos/images/newsfeed/000/406/346/fd3.jpg',
    posts: [
      {
        text: 'Love is in the air? Get out the gas mask.',
        date: new Date(2017, 1, 14),
      },
      {
        text: 'If I had a dollar for every time I thought of you, I would be broke.',
        date: new Date(2017, 6, 1),
      },
      {
        text: 'The worst thing after waking up? Everything until I go to bed.',
        date: new Date(2017, 7, 10),
      },
      {
        text: 'I had fun once, it was horrible.',
        date: new Date(2017, 8, 16),
      },
      {
        text: 'They stole my poop, again.',
        date: new Date(2017, 9, 12),
      },
      {
        text: 'You had the red dot...this whole time.',
        date: new Date(2017, 10, 27),
      },
      {
        text: 'I like onions, they make people cry',
        date: new Date(2017, 10, 28),
      },
      {
        text: "Zombies eat brains...Don't worry most of you have nothing to worry about",
        date: new Date(2017, 10, 29),
      },
      {
        text: 'I woke up today and decided to give it my all or nothing...I chose nothing...',
        date: new Date(2017, 11, 9, 1),
      },
      {
        text: 'So many reasons to be grumpy, so little time',
        date: new Date(2017, 11, 25),
      },
      {
        text: "Why socialize when there's perfectly good Wifi and food at home.",
        date: new Date(2017, 11, 25, 2),
      },
      {
        text: "Happy New Year...Whoop Dee Freakin' Do...One year closer to death.",
        date: new Date(2018, 0, 1, 1),
      },
      {
        text: "If I have said or done anything to hurt you, I don't care",
        date: new Date(2018, 0, 2),
      },
      {
        text: 'I purred once, it was awful',
        date: new Date(2018, 0, 3),
      },
      {
        text: "Your face uses more muscles to frown then to smile...what can I say I'm addicted to fitness.",
        date: new Date(2018, 0, 4),
      },
      {
        text: "Why don't you slip into something more comfortable, like a coma.",
        date: new Date(2018, 0, 5),
      },
      {
        text: 'The worst part of my Monday, is hearing you complain about yours.',
        date: new Date(2018, 0, 7),
      },
      {
        text: 'I wrapped myself in anger, with a dash of hate, and at the bottom of it all is an icy center of pure terror...',
        date: new Date(2018, 0, 8),
      },
      {
        text: '...Go ahead, tickle me one. more. time.',
        date: new Date(2018, 0, 8, 1),
      },
    ],
    follows: [],
  },
  {
    name: 'Jon Snow',
    username: 'JonTheSnowLeopard',
    password: 'Password',
    image: 'https://cdn.pixabay.com/photo/2017/01/11/19/44/snow-leopard-1972724_1280.jpg',
    posts: [
      {
        text: 'Hello Kitter!!',
        date: new Date(2017, 10, 30),
      },
    ],
    follows: [],
  },
  {
    name: 'Leonardo Lion',
    username: 'LeoTheLion',
    password: 'Password',
    image: 'https://cdn.pixabay.com/photo/2017/01/11/19/44/snow-leopard-1972724_1280.jpg',
    posts: [],
    follows: [],
  },
];

module.exports = data;
