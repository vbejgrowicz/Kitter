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
      'allThingsCats',
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
        likes: ['allThingsCats', 'JonTheSnowLeopard', 'LeoTheLion', 'Guest'],
      },
      {
        text: 'I live with my humans in New York City',
        date: new Date(2017, 11, 1, 1),
        likes: [],
      },
      {
        text: "It's snowing today! I like to chase the snow through the windows...but I'm tired now so I'll just take a nap.",
        date: new Date(2017, 11, 9),
        likes: ['Guest', 'JonTheSnowLeopard'],
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
        likes: ['allThingsCats'],
      },
      {
        text: "Okay, so It's 3 am and I am so hungry but my humans won't wake up and I have no food... \nWhat should I do...",
        date: new Date(2018, 0, 4, 3),
        likes: ['LeoTheLion'],
      },
      {
        text: "I've tried poking at them, meowing at them, and biting them but they won't get up to feed me!",
        date: new Date(2018, 0, 4, 3, 4),
        likes: [],
      },
      {
        text: "Alright they finally fed me, so I guess I'll be okay but I still think they should have fed me when I asked...",
        date: new Date(2018, 0, 5),
        likes: ['LeoTheLion'],
      },
    ],
    follows: [
      'allThingsCats',
      'JonTheSnowLeopard',
      'LeoTheLion',
      'TheRealTonyTheTiger',
    ],
  },
  {
    name: 'Cat Facts',
    username: 'allThingsCats',
    password: 'Password',
    image: 'https://images.unsplash.com/photo-1472491235688-bdc81a63246e?auto=format&fit=crop&w=2250&q=80',
    posts: [
      {
        text: 'Hey! Follow me for all your daily Cat Facts.',
        date: new Date(2017, 11, 1),
        likes: ['TheRealBadKitty', 'JonTheSnowLeopard', 'LeoTheLion', 'TheRealTonyTheTiger'],
      },
      {
        text: "A cat's field of vision does not cover the area right under its nose.",
        date: new Date(2017, 11, 3),
        likes: [],
      },
      {
        text: 'Maine Coons are the most massive breed of house cats. They can weigh up to around 24 pounds.',
        date: new Date(2017, 11, 5),
        likes: [],
      },
      {
        text: 'Landing on all fours is something typical to cats thanks to the help of their eyes and special balance organs in their inner ear...',
        date: new Date(2017, 11, 6, 12, 1),
        likes: [],
      },
      {
        text: '...These tools help them straighten themselves in the air and land upright on the ground.',
        date: new Date(2017, 11, 6, 12, 2),
        likes: [],
      },
      {
        text: 'Cats who eat too much tuna can become addicted, which can actually cause a Vitamin E deficiency.',
        date: new Date(2017, 11, 8),
        likes: [],
      },
      {
        text: 'Despite appearing like a wild cat, the Ocicat does not have an ounce of wild blood.',
        date: new Date(2017, 11, 10),
        likes: [],
      },
      {
        text: 'Most kittens are born with blue eyes, which then turn color with age.',
        date: new Date(2017, 11, 12),
        likes: ['Guest'],
      },
      {
        text: "Outdoor cats' lifespan averages at about 3 to 5 years; indoor cats have lives that last 16 years or more.",
        date: new Date(2017, 11, 14),
        likes: [],
      },
      {
        text: "A third of cats' time spent awake is usually spent cleaning themselves.",
        date: new Date(2017, 11, 16),
        likes: ['TheRealBadKitty'],
      },
      {
        text: 'Cats can pick up on your tone of voice, so sweet-talking to your cat has more of an impact than you think.',
        date: new Date(2017, 11, 18),
        likes: [],
      },
      {
        text: 'Cats show affection and mark their territory by rubbing on people. Glands on their face, tail and paws release a scent to make its mark.',
        date: new Date(2017, 11, 20),
        likes: [],
      },
      {
        text: "Cats have the cognitive ability to sense a human's feelings and overall mood.",
        date: new Date(2017, 11, 22),
        likes: [],
      },
      {
        text: 'Cats CAN be lefties and righties, just like us. More than forty percent of them are, leaving some ambidextrous.',
        date: new Date(2017, 11, 24),
        likes: ['TheRealTonyTheTiger'],
      },
      {
        text: 'A fingerprint is to a human as a nose is to a cat.',
        date: new Date(2017, 11, 28),
        likes: ['TheRealBadKitty'],
      },
      {
        text: 'Cats are unable to detect sweetness in anything they taste.',
        date: new Date(2018, 0, 2),
        likes: [],
      },
      {
        text: 'Unlike most other cats, the Turkish Van breed has a water-resistant coat and enjoys being in water.',
        date: new Date(2018, 0, 4),
        likes: [],
      },
      {
        text: 'Some cats can survive falls from as high up as 65 feet or more.',
        date: new Date(2018, 0, 6),
        likes: [],
      },
      {
        text: 'A cat can reach up to five times its own height per jump.',
        date: new Date(2018, 0, 8),
        likes: ['TheRealBadKitty'],
      },
      {
        text: 'Cats sleep 16 hours of any given day.',
        date: new Date(2018, 0, 9, 19),
        likes: ['TheRealBadKitty', 'TheRealTonyTheTiger', 'GrumpyCat'],
      },
    ],
    follows: [
      'TheRealBadKitty',
      'BigCats',
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
        text: 'The four big cats consist of the Tiger, Lion, Jaguar, and Leopard...',
        date: new Date(2017, 11, 2, 1),
        likes: [],
      },
      {
        text: '...They are the only wild cats that have the ability to roar, but they cannot purr like most other cats.',
        date: new Date(2017, 11, 2, 1, 1),
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
        likes: ['JonTheSnowLeopard'],
      },
      {
        text: 'The Tiger is the largest of the big cats weighing up to 325kg.',
        date: new Date(2017, 11, 18),
        likes: [],
      },
      {
        text: 'Tigers used to roam across most of Asia, but now they’re restricted to just 7% of their original range, in isolated forests and grasslands across 13 countries.',
        date: new Date(2017, 11, 22),
        likes: [],
      },
      {
        text: 'There are only around 3,900 tigers in the wild. With the support of Tiger Protectors around the world, they are beginning to make a comeback.',
        date: new Date(2017, 11, 24),
        likes: ['TheRealTonyTheTiger', 'TheRealBadKitty'],
      },
      {
        text: 'Wild tiger numbers have dropped by more than 95% since the beggining of the 20th century...',
        date: new Date(2017, 11, 26, 7),
        likes: [],
      },
      {
        text: '..Now for the first time in conservation history their numbers are on the increase. \nPlease continue to support the endagered Tigers!',
        date: new Date(2017, 11, 26, 7, 1),
        likes: [],
      },
      {
        text: 'The Lion is the second largest of the big cats weighing up to 225kg.',
        date: new Date(2018, 0, 1),
        likes: [],
      },
      {
        text: 'The Snow Leopard is the smallest of the big cats weighing up to 55kg.',
        date: new Date(2018, 0, 6),
        likes: [],
      },
    ],
    follows: [
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
        likes: ['TheRealBadKitty'],
      },
      {
        text: 'You had the red dot...this whole time.',
        date: new Date(2017, 11, 9),
        likes: ['Guest', 'TheRealBadKitty'],
      },
      {
        text: 'I like onions, they make people cry',
        date: new Date(2017, 11, 10),
        likes: [],
      },
      {
        text: "Why don't you slip into something more comfortable, like a coma.",
        date: new Date(2017, 11, 12),
        likes: [],
      },
      {
        text: 'The worst part of my Monday, is hearing you complain about yours.',
        date: new Date(2017, 11, 15),
        likes: [],
      },
      {
        text: 'I wrapped myself in anger, with a dash of hate, and at the bottom of it all is an icy center of pure terror...',
        date: new Date(2017, 11, 17),
        likes: [],
      },
      {
        text: '...Go ahead, tickle me one. more. time.',
        date: new Date(2017, 11, 17, 1),
        likes: [],
      },
      {
        text: "Zombies eat brains...Don't worry most of you have nothing to worry about",
        date: new Date(2017, 11, 18),
        likes: [],
      },
      {
        text: 'I woke up today and decided to give it my all or nothing...I chose nothing...',
        date: new Date(2017, 11, 20, 1),
        likes: ['TheRealBadKitty', 'Guest'],
      },
      {
        text: 'So many reasons to be grumpy, so little time',
        date: new Date(2017, 11, 25),
        likes: [],
      },
      {
        text: "Why socialize when there's perfectly good Wifi and food at home.",
        date: new Date(2017, 11, 27, 2),
        likes: ['JonTheSnowLeopard'],
      },
      {
        text: "If I have said or done anything to hurt you, I don't care",
        date: new Date(2017, 11, 30),
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
        likes: ['LeoTheLion'],
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
      'allThingsCats',
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
      'allThingsCats',
      'BigCats',
      'JonTheSnowLeopard',
      'TheRealTonyTheTiger',
    ],
  },
  {
    name: 'Tony Tiger',
    username: 'TheRealTonyTheTiger',
    password: 'Password',
    image: 'https://vignette.wikia.nocookie.net/parody/images/e/e2/Tony-the-tiger-sq.png/revision/latest/scale-to-width-down/480?cb=20170413111705',
    posts: [
      {
        text: 'Hello! I just joined Kitter!',
        date: new Date(2018, 0, 1),
        likes: ['TheRealBadKitty'],
      },
      {
        text: "It's a GRRR-EAT start, our numbers are increasing but we need your help to make sure that tigers can thrive again!",
        date: new Date(2018, 0, 1, 1),
        likes: [],
      },
      {
        text: 'Just over a century ago, there were as many as 100,000 of us living in Asia.',
        date: new Date(2018, 0, 1),
        likes: [],
      },
      {
        text: 'There are only around 3,900 of us left in the wild. With the support of Tiger Protectors around the world, we are beginning to make a comeback!',
        date: new Date(2018, 0, 2),
        likes: ['Guest', 'TheRealBadKitty', 'LeoTheLion', 'JonTheSnowLeopard', 'allThingsCats', 'BigCats'],
      },
      {
        text: 'Our catastrophic population decline is driven by a range of threats, including poaching for the illegal wildlife trade, ...',
        date: new Date(2018, 0, 4, 12, 1),
        likes: [],
      },
      {
        text: '...overhunting of prey species by local people, habitat loss and fragmentation, and human-tiger conflict.',
        date: new Date(2018, 0, 4, 12, 2),
        likes: [],
      },
      {
        text: 'Ahhh, what a GRRR-EAT time for a nap!!',
        date: new Date(2018, 0, 6),
        likes: ['LeoTheLion', 'TheRealBadKitty'],
      },
      {
        text: 'Thank you all for your support, please continue to support us!',
        date: new Date(2018, 0, 8),
        likes: ['TheRealBadKitty', 'LeoTheLion', 'JonTheSnowLeopard'],
      },
      {
        text: 'As top predators, we help to keep the environment healthy...',
        date: new Date(2018, 0, 9, 12, 1),
        likes: [],
      },
      {
        text: '...Without enough predators to prey on the animals, the herbivores can overgraze and damage the land, disrupting the balance of the local environment.',
        date: new Date(2018, 0, 9, 12, 2),
        likes: ['LeoTheLion'],
      },
      {
        text: 'Become a Tiger Protector Today! \n https://support.wwf.org.uk/protect-a-tiger!',
        date: new Date(2018, 0, 10),
        likes: ['LeoTheLion', 'TheRealBadKitty', 'Guest'],
      },
    ],
    follows: [
      'allThingsCats',
      'BigCats',
      'LeoTheLion',
    ],
  },
];

module.exports = data;
