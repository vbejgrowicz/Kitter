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
        date: new Date(2017, 11, 30),
        likes: [],
      },
    ],
    follows: [
      'TheRealBadKitty',
      'GrumpyCat',
      'CatFacts',
      'BigCats',
      'JonTheSnowLeopard',
      'LeoTheLion',
      'TheRealTonyTheTiger',
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
        likes: ['CatFacts', 'JonTheSnowLeopard', 'LeoTheLion'],
      },
      {
        text: 'I live with my humans in New York City',
        date: new Date(2017, 11, 1, 1),
        likes: [],
      },
      {
        text: "It's snowing today! I like to chase the snow through the windows...but I'm tired now so I'll just take a nap.",
        date: new Date(2017, 11, 9),
        likes: [],
      },
      {
        text: "It's Christmas! I got a new feather, a lazer pointer, and soooo many treats! Can I have the treats now!!",
        date: new Date(2017, 11, 25),
        likes: [],
      },
      {
        text: 'I got to have a whole can of TUNA for dinner! Ah, I love TUNA!',
        date: new Date(2017, 11, 25, 17),
        likes: [],
      },
      {
        text: 'Happy New Year!!!!! \nNew Year, Same Bad Kitty... ;)',
        date: new Date(2018, 0, 1),
        likes: [],
      },
      {
        text: "It's so cold out...I'm just going to go sleep under the blankets all day....zzzzzzz",
        date: new Date(2018, 0, 1),
        likes: [],
      },
      {
        text: "Okay, so It's 3 am and I am so hungry but my humans won't wake up and I have no food... \nWhat should I do...",
        date: new Date(2018, 0, 4, 3),
        likes: [],
      },
      {
        text: "I've tried poking at them, meowing at them, and biting them but they won't get up to feed me!",
        date: new Date(2018, 0, 4, 3, 4),
        likes: [],
      },
      {
        text: "Alright they finally fed me, so I guess I'll be okay but I still think they should have fed me when I asked...",
        date: new Date(2018, 0, 5),
        likes: [],
      },
    ],
    follows: [
      'CatFacts',
      'JonTheSnowLeopard',
      'LeoTheLion',
      'TheRealTonyTheTiger',
    ],
  },
  {
    name: 'Cat Facts',
    username: 'CatFacts',
    password: 'Password',
    image: 'https://images.unsplash.com/photo-1506755855567-92ff770e8d00?auto=format&fit=crop&w=934&q=80',
    posts: [
      {
        text: 'Hey! Follow me for all your daily Cat Facts.',
        date: new Date(2017, 11, 1),
        likes: ['TheRealBadKitty', 'JonTheSnowLeopard', 'LeoTheLion', 'TheRealTonyTheTiger'],
      },
      {
        text: "A cat's field of vision does not cover the area right under its nose.",
        date: new Date(2017, 11, 2),
        likes: [],
      },
      {
        text: 'Maine Coons are the most massive breed of house cats. They can weigh up to around 24 pounds.',
        date: new Date(2017, 11, 3),
        likes: [],
      },
      {
        text: 'Landing on all fours is something typical to cats thanks to the help of their eyes and special balance organs in their inner ear...',
        date: new Date(2017, 11, 4, 12, 1),
        likes: [],
      },
      {
        text: '...These tools help them straighten themselves in the air and land upright on the ground.',
        date: new Date(2017, 11, 4, 12, 2),
        likes: [],
      },
      {
        text: 'Cats who eat too much tuna can become addicted, which can actually cause a Vitamin E deficiency.',
        date: new Date(2017, 11, 5),
        likes: [],
      },
      {
        text: 'Despite appearing like a wild cat, the Ocicat does not have an ounce of wild blood.',
        date: new Date(2017, 11, 6),
        likes: [],
      },
      {
        text: 'Most kittens are born with blue eyes, which then turn color with age.',
        date: new Date(2017, 11, 7),
        likes: [],
      },
      {
        text: "Outdoor cats' lifespan averages at about 3 to 5 years; indoor cats have lives that last 16 years or more.",
        date: new Date(2017, 11, 8),
        likes: [],
      },
      {
        text: "A third of cats' time spent awake is usually spent cleaning themselves.",
        date: new Date(2017, 11, 9),
        likes: [],
      },
      {
        text: 'Cats can pick up on your tone of voice, so sweet-talking to your cat has more of an impact than you think.',
        date: new Date(2017, 11, 10),
        likes: [],
      },
      {
        text: 'Cats show affection and mark their territory by rubbing on people. Glands on their face, tail and paws release a scent to make its mark.',
        date: new Date(2017, 11, 11),
        likes: [],
      },
      {
        text: "Cats have the cognitive ability to sense a human's feelings and overall mood.",
        date: new Date(2017, 11, 12),
        likes: [],
      },
      {
        text: 'Cats CAN be lefties and righties, just like us. More than forty percent of them are, leaving some ambidextrous.',
        date: new Date(2017, 11, 13),
        likes: [],
      },
      {
        text: 'A fingerprint is to a human as a nose is to a cat.',
        date: new Date(2017, 11, 14),
        likes: [],
      },
      {
        text: 'Cats sleep 16 hours of any given day.',
        date: new Date(2017, 11, 15),
        likes: ['TheRealBadKitty', 'TheRealTonyTheTiger', 'GrumpyCat'],
      },
      {
        text: 'Unlike most other cats, the Turkish Van breed has a water-resistant coat and enjoys being in water.',
        date: new Date(2017, 11, 16),
        likes: [],
      },
      {
        text: 'Some cats can survive falls from as high up as 65 feet or more.',
        date: new Date(2017, 11, 17),
        likes: [],
      },
      {
        text: 'A cat can reach up to five times its own height per jump.',
        date: new Date(2017, 11, 18),
        likes: [],
      },
      {
        text: 'Cats are unable to detect sweetness in anything they taste.',
        date: new Date(2017, 11, 19),
        likes: [],
      },
    ],
    follows: [
      'TheRealBadKitty',
      'LeoTheLion',
      'TheRealTonyTheTiger',
      'JonTheSnowLeopard',
    ],
  },
  {
    name: 'Big Cat Facts',
    username: 'BigCats',
    password: 'Password',
    image: 'http://gotouchdown.com/wp-content/uploads/2017/05/BIG-CATS-Collage-Predators-Animals-Wilderness-Big-Cats-2062772.jpg',
    posts: [
      {
        text: 'Hey! Follow me to learn all about Big Cats.',
        date: new Date(2017, 11, 1),
        likes: ['TheRealBadKitty', 'JonTheSnowLeopard', 'LeoTheLion', 'TheRealTonyTheTiger'],
      },
      {
        text: 'The Panthera lineage consists of seven cats, five of which are the largest in the cat family and are considered "Big Cats".',
        date: new Date(2017, 11, 2),
        likes: [],
      },
      {
        text: 'The four big cats consist of the Tiger, Lion, Jaguar, and Leopard. They are the only wild cats that have the ability to roar, but they cannot purr like most other cats.',
        date: new Date(2017, 11, 2, 1),
        likes: ['LeoTheLion', 'TheRealTonyTheTiger'],
      },
      {
        text: 'The Snow Leopard is also a big cat since 2008, but it is controversial because the Snow Leopard cannot roar.',
        date: new Date(2017, 11, 2, 3),
        likes: ['JonTheSnowLeopard'],
      },
      {
        text: 'A specialized larynx and a unique part of the throat called a hyoid apparatus allows for the production of a true, deep roaring sound.',
        date: new Date(2017, 11, 5),
        likes: ['LeoTheLion', 'TheRealTonyTheTiger'],
      },
      {
        text: 'The larynx of a Snow Leopard creates more of a combination hiss/snarl sound without the bass tone of a real roar.',
        date: new Date(2017, 11, 10),
        likes: [],
      },
      {
        text: 'The Tiger is the largest of the big cats weighing up to 325kg.',
        date: new Date(2017, 11, 15),
        likes: [],
      },
      {
        text: 'The Lion is the second largest of the big cats weighing up to 225kg.',
        date: new Date(2017, 11, 20),
        likes: [],
      },
      {
        text: 'The Snow Leopard is the smallest of the big cats weighing up to 55kg.',
        date: new Date(2017, 11, 25),
        likes: [],
      },
    ],
    follows: [
      'TheRealBadKitty',
      'LeoTheLion',
      'TheRealTonyTheTiger',
      'JonTheSnowLeopard',
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
        date: new Date(2017, 11, 1),
        likes: [],
      },
      {
        text: 'If I had a dollar for every time I thought of you, I would be broke.',
        date: new Date(2017, 11, 4),
        likes: [],
      },
      {
        text: 'The worst thing after waking up? Everything until I go to bed.',
        date: new Date(2017, 11, 5),
        likes: [],
      },
      {
        text: 'I had fun once, it was horrible.',
        date: new Date(2017, 11, 6),
        likes: [],
      },
      {
        text: 'They stole my poop, again.',
        date: new Date(2017, 11, 8),
        likes: [],
      },
      {
        text: 'You had the red dot...this whole time.',
        date: new Date(2017, 11, 9),
        likes: [],
      },
      {
        text: 'I like onions, they make people cry',
        date: new Date(2017, 11, 10),
        likes: [],
      },
      {
        text: "Zombies eat brains...Don't worry most of you have nothing to worry about",
        date: new Date(2017, 11, 15),
        likes: [],
      },
      {
        text: 'I woke up today and decided to give it my all or nothing...I chose nothing...',
        date: new Date(2017, 11, 20, 1),
        likes: [],
      },
      {
        text: 'So many reasons to be grumpy, so little time',
        date: new Date(2017, 11, 25),
        likes: [],
      },
      {
        text: "Why socialize when there's perfectly good Wifi and food at home.",
        date: new Date(2017, 11, 27, 2),
        likes: [],
      },
      {
        text: "If I have said or done anything to hurt you, I don't care",
        date: new Date(2018, 11, 30),
        likes: [],
      },
      {
        text: "Happy New Year...Whoop Dee Freakin' Do...One year closer to death.",
        date: new Date(2018, 0, 1, 1),
        likes: [],
      },
      {
        text: 'I purred once, it was awful',
        date: new Date(2018, 0, 2),
        likes: [],
      },
      {
        text: "Your face uses more muscles to frown then to smile...what can I say I'm addicted to fitness.",
        date: new Date(2018, 0, 4),
        likes: [],
      },
      {
        text: "Why don't you slip into something more comfortable, like a coma.",
        date: new Date(2018, 0, 6),
        likes: [],
      },
      {
        text: 'The worst part of my Monday, is hearing you complain about yours.',
        date: new Date(2018, 0, 8),
        likes: [],
      },
      {
        text: 'I wrapped myself in anger, with a dash of hate, and at the bottom of it all is an icy center of pure terror...',
        date: new Date(2018, 0, 9),
        likes: [],
      },
      {
        text: '...Go ahead, tickle me one. more. time.',
        date: new Date(2018, 0, 9, 1),
        likes: [],
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
        text: 'Hello!!',
        date: new Date(2017, 10, 30),
        likes: [],
      },
    ],
    follows: [
      'CatFacts',
      'BigCats',
    ],
  },
  {
    name: 'Leonardo Lion',
    username: 'LeoTheLion',
    password: 'Password',
    image: 'https://images.unsplash.com/photo-1508967120282-691df21da41e?auto=format&fit=crop&w=1001&q=80',
    posts: [],
    follows: [
      'CatFacts',
      'BigCats',
    ],
  },
  {
    name: 'Tony Tiger',
    username: 'TheRealTonyTheTiger',
    password: 'Password',
    image: 'https://images.unsplash.com/photo-1488793207478-ff0892419e30?auto=format&fit=crop&w=933&q=80',
    posts: [],
    follows: [
      'CatFacts',
      'BigCats',
    ],
  },
];

module.exports = data;
