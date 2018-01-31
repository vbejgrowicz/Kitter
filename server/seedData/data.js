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
        date: new Date(2017, 11, 30, 2),
        likes: ['MittensKittens', 'BigFluff2'],
      },
      {
        text: 'I love connecting with all of my favorite cats on Kitter!!',
        date: new Date(2018, 0, 10, 8),
        likes: ['theOnlyOne'],
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
      'BigFluff2',
      'MittensKittens',
      'SylvesterTheCat',
      'theOnlyOne',
      'futureKing',
      'Garfield',
      'Tom',
      'GaryTheSnail',
      'TheCatInTheHat',
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
        date: new Date(2017, 11, 1, 2),
        likes: ['allThingsCats', 'JonTheSnowLeopard', 'LeoTheLion', 'Guest'],
      },
      {
        text: 'I live with my humans in New York City',
        date: new Date(2017, 11, 4, 3),
        likes: [],
      },
      {
        text: "It's snowing today! I like to chase the snow through the windows...but I'm tired now so I'll just take a nap.",
        date: new Date(2017, 11, 9, 1, 1),
        likes: ['Guest', 'JonTheSnowLeopard'],
      },
      {
        text: "It's Christmas! I got a new feather, a lazer pointer, and soooo many treats! Can I have the treats now!!",
        date: new Date(2017, 11, 25, 5, 5),
        likes: [],
      },
      {
        text: 'I got to have a whole can of TUNA for dinner! Ah, I love TUNA!',
        date: new Date(2017, 11, 25, 17),
        likes: [],
      },
      {
        text: 'Happy New Year!!!!! \nNew Year, Same Bad Kitty... ;)',
        date: new Date(2018, 0, 1, 4, 6),
        likes: [],
      },
      {
        text: "It's so cold out...I'm just going to go sleep under the blankets all day ....zzzzzzz",
        date: new Date(2018, 0, 1, 8, 3),
        likes: ['allThingsCats', 'BigFluff2', 'MittensKittens'],
      },
      {
        text: "Okay, so It's 3 am and I am so hungry but my humans won't wake up and I have no food... \nWhat should I do...",
        date: new Date(2018, 0, 4, 3),
        likes: ['LeoTheLion'],
      },
      {
        text: "I've tried poking at them, meowing at them, and biting them but they won't get up to feed me!",
        date: new Date(2018, 0, 4, 4, 4),
        likes: ['Guest'],
      },
      {
        text: "Alright they finally fed me, so I guess I'll be okay but I still think they should have fed me when I asked...",
        date: new Date(2018, 0, 5, 4),
        likes: ['LeoTheLion'],
      },
      {
        text: 'Kitter is a great place to connect with @BigFluff2 and @MittensKittens!',
        date: new Date(2018, 0, 20, 4),
        likes: ['Guest', 'MittensKittens', 'BigFluff2', 'LeoTheLion', 'TheRealTonyTheTiger', 'allThingsCats'],
      },
    ],
    follows: [
      'allThingsCats',
      'JonTheSnowLeopard',
      'LeoTheLion',
      'TheRealTonyTheTiger',
      'SylvesterTheCat',
      'futureKing',
      'theOnlyOne',
      'Tom',
    ],
  },
  {
    name: 'Cat Facts',
    username: 'allThingsCats',
    password: 'Password',
    image: 'https://s3.amazonaws.com/kitter-profile-images/1515800228981',
    posts: [
      {
        text: 'Hey! Follow me for all your daily Cat Facts.',
        date: new Date(2017, 11, 1, 1),
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
        date: new Date(2017, 11, 8, 1),
        likes: [],
      },
      {
        text: 'Despite appearing like a wild cat, the Ocicat does not have an ounce of wild blood.',
        date: new Date(2017, 11, 10, 5),
        likes: [],
      },
      {
        text: 'Most kittens are born with blue eyes, which then turn color with age.',
        date: new Date(2017, 11, 12, 2),
        likes: ['Guest'],
      },
      {
        text: "Outdoor cats' lifespan averages at about 3 to 5 years; indoor cats have lives that last 16 years or more.",
        date: new Date(2017, 11, 14, 3),
        likes: [],
      },
      {
        text: "A third of cats' time spent awake is usually spent cleaning themselves.",
        date: new Date(2017, 11, 16, 7),
        likes: ['TheRealBadKitty'],
      },
      {
        text: 'Cats can pick up on your tone of voice, so sweet-talking to your cat has more of an impact than you think.',
        date: new Date(2017, 11, 18, 5),
        likes: [],
      },
      {
        text: 'Cats show affection and mark their territory by rubbing on people. Glands on their face, tail and paws release a scent to make its mark.',
        date: new Date(2017, 11, 20, 2),
        likes: [],
      },
      {
        text: "Cats have the cognitive ability to sense a human's feelings and overall mood.",
        date: new Date(2017, 11, 22, 7),
        likes: [],
      },
      {
        text: 'Cats CAN be lefties and righties, just like us. More than forty percent of them are, leaving some ambidextrous.',
        date: new Date(2017, 11, 24, 1),
        likes: ['TheRealTonyTheTiger'],
      },
      {
        text: 'A fingerprint is to a human as a nose is to a cat.',
        date: new Date(2017, 11, 28, 7),
        likes: ['TheRealBadKitty'],
      },
      {
        text: 'Cats are unable to detect sweetness in anything they taste.',
        date: new Date(2018, 0, 2, 1),
        likes: [],
      },
      {
        text: 'Unlike most other cats, the Turkish Van breed has a water-resistant coat and enjoys being in water.',
        date: new Date(2018, 0, 4, 12),
        likes: [],
      },
      {
        text: 'Some cats can survive falls from as high up as 65 feet or more.',
        date: new Date(2018, 0, 6, 7),
        likes: [],
      },
      {
        text: 'A cat can reach up to five times its own height per jump.',
        date: new Date(2018, 0, 8, 6),
        likes: ['TheRealBadKitty', 'Guest'],
      },
      {
        text: 'Cats sleep 16 hours of any given day.',
        date: new Date(2018, 0, 10, 2),
        likes: ['TheRealBadKitty', 'TheRealTonyTheTiger', 'GrumpyCat', 'BigFluff2', 'MittensKittens', 'BigCats'],
      },
    ],
    follows: [
      'TheRealBadKitty',
      'BigCats',
      'BigFluff2',
      'MittensKittens',
    ],
  },
  {
    name: 'Big Cat Facts',
    username: 'BigCats',
    password: 'Password',
    image: 'https://s3.amazonaws.com/kitter-profile-images/1515801637797',
    posts: [
      {
        text: 'Hey! Follow me to learn all about Big Cats.',
        date: new Date(2017, 11, 1, 8),
        likes: ['TheRealBadKitty', 'JonTheSnowLeopard', 'LeoTheLion', 'TheRealTonyTheTiger'],
      },
      {
        text: 'The Panthera lineage consists of seven cats, five of which are the largest in the cat family and are considered "Big Cats".',
        date: new Date(2017, 11, 2, 12),
        likes: [],
      },
      {
        text: 'The four big cats consist of the Tiger, Lion, Jaguar, and Leopard...',
        date: new Date(2017, 11, 2, 1, 7),
        likes: [],
      },
      {
        text: '...They are the only wild cats that have the ability to roar, but they cannot purr like most other cats.',
        date: new Date(2017, 11, 2, 1, 1, 2),
        likes: ['LeoTheLion', 'TheRealTonyTheTiger'],
      },
      {
        text: 'The Snow Leopard is also a big cat since 2008, but it is controversial because the Snow Leopard cannot roar.',
        date: new Date(2017, 11, 2, 3, 5),
        likes: ['JonTheSnowLeopard'],
      },
      {
        text: 'A specialized larynx and a unique part of the throat called a hyoid apparatus allows for the production of a true, deep roaring sound.',
        date: new Date(2017, 11, 5, 2, 7, 4),
        likes: ['LeoTheLion', 'TheRealTonyTheTiger'],
      },
      {
        text: 'The larynx of a Snow Leopard creates more of a combination hiss/snarl sound without the bass tone of a real roar.',
        date: new Date(2017, 11, 10, 1),
        likes: ['JonTheSnowLeopard'],
      },
      {
        text: 'The Tiger is the largest of the big cats weighing up to 325kg.',
        date: new Date(2017, 11, 18, 9),
        likes: [],
      },
      {
        text: 'Tigers used to roam across most of Asia, but now they’re restricted to just 7% of their original range, in isolated forests and grasslands across 13 countries.',
        date: new Date(2017, 11, 22, 1),
        likes: [],
      },
      {
        text: 'There are only around 3,900 tigers in the wild. With the support of Tiger Protectors around the world, they are beginning to make a comeback.',
        date: new Date(2017, 11, 24, 8),
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
        date: new Date(2018, 0, 1, 5, 7, 8),
        likes: [],
      },
      {
        text: 'The Snow Leopard is the smallest of the big cats weighing up to 55kg.',
        date: new Date(2018, 0, 6, 3, 7, 9),
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
    image: 'https://s3.amazonaws.com/kitter-profile-images/1515801648374',
    posts: [
      {
        text: 'Love is in the air? Get out the gas mask.',
        date: new Date(2017, 11, 1, 3, 8),
        likes: [],
      },
      {
        text: 'If I had a dollar for every time I thought of you, I would be broke.',
        date: new Date(2017, 11, 4, 6, 5, 1),
        likes: [],
      },
      {
        text: 'The worst thing after waking up? Everything until I go to bed.',
        date: new Date(2017, 11, 5, 2, 3),
        likes: [],
      },
      {
        text: 'I had fun once, it was horrible.',
        date: new Date(2017, 11, 6, 8, 9),
        likes: [],
      },
      {
        text: 'They stole my poop, again.',
        date: new Date(2017, 11, 8, 10, 40),
        likes: ['TheRealBadKitty'],
      },
      {
        text: 'You had the red dot...this whole time.',
        date: new Date(2017, 11, 9, 1, 2, 3),
        likes: ['Guest', 'TheRealBadKitty'],
      },
      {
        text: 'I like onions, they make people cry',
        date: new Date(2017, 11, 10, 11),
        likes: [],
      },
      {
        text: "Why don't you slip into something more comfortable, like a coma.",
        date: new Date(2017, 11, 12, 3, 1),
        likes: [],
      },
      {
        text: 'The worst part of my Monday, is hearing you complain about yours.',
        date: new Date(2017, 11, 15, 4, 1),
        likes: [],
      },
      {
        text: 'I wrapped myself in anger, with a dash of hate, and at the bottom of it all is an icy center of pure terror...',
        date: new Date(2017, 11, 17, 1, 9),
        likes: [],
      },
      {
        text: '...Go ahead, tickle me one. more. time.',
        date: new Date(2017, 11, 17, 1, 10),
        likes: [],
      },
      {
        text: "Zombies eat brains...Don't worry most of you have nothing to worry about",
        date: new Date(2017, 11, 18, 1, 9),
        likes: [],
      },
      {
        text: 'I woke up today and decided to give it my all or nothing...I chose nothing...',
        date: new Date(2017, 11, 20, 1),
        likes: ['TheRealBadKitty', 'Guest'],
      },
      {
        text: 'So many reasons to be grumpy, so little time',
        date: new Date(2017, 11, 25, 1, 1, 1),
        likes: [],
      },
      {
        text: "Why socialize when there's perfectly good Wifi and food at home.",
        date: new Date(2017, 11, 27, 2),
        likes: ['JonTheSnowLeopard'],
      },
      {
        text: "If I have said or done anything to hurt you, I don't care",
        date: new Date(2017, 11, 30, 1),
        likes: [],
      },
      {
        text: "Happy New Year...Whoop Dee Freakin' Do...One year closer to death.",
        date: new Date(2018, 0, 1, 1),
        likes: [],
      },
      {
        text: 'I purred once, it was awful',
        date: new Date(2018, 0, 2, 7),
        likes: [],
      },
      {
        text: "Your face uses more muscles to frown then to smile...what can I say I'm addicted to fitness.",
        date: new Date(2018, 0, 4, 1, 9),
        likes: ['LeoTheLion'],
      },
    ],
    follows: ['Garfield'],
  },
  {
    name: 'Jon Snow',
    username: 'JonTheSnowLeopard',
    password: 'Password',
    image: 'https://s3.amazonaws.com/kitter-profile-images/1515801642922',
    posts: [
      {
        text: 'Hello!!',
        date: new Date(2017, 10, 30, 12, 1),
        likes: [],
      },
      {
        text: 'Please help protect my friends! https://goo.gl/Vs16i4',
        date: new Date(2017, 11, 20, 12, 1),
        likes: ['LeoTheLion', 'TheRealTonyTheTiger'],
      },
      {
        text: 'Winter is Coming.',
        date: new Date(2017, 11, 30, 12, 1),
        likes: ['TheRealBadKitty', 'Guest'],
      },
      {
        text: 'The night is dark and full of terrors.',
        date: new Date(2018, 0, 10, 12, 1),
        likes: ['Tom'],
      },
    ],
    follows: [
      'allThingsCats',
      'BigCats',
      'SylvesterTheCat',
      'Garfield',
    ],
  },
  {
    name: 'Leonardo Lion',
    username: 'LeoTheLion',
    password: 'Password',
    image: 'https://s3.amazonaws.com/kitter-profile-images/1515801656421',
    posts: [
      {
        text: 'Please help protect my friends! https://goo.gl/knrEMd',
        date: new Date(2017, 11, 1, 7, 2),
        likes: ['TheRealTonyTheTiger', 'TheRealBadKitty', 'Guest'],
      },
      {
        text: 'Lions have undergone a catastrophic decline and are on the brink of extinction in all but the largest and best managed national parks.',
        date: new Date(2018, 0, 1, 3),
        likes: [],
      },
      {
        text: 'Please help my friends, Adopt a Lion today! https://goo.gl/knrEMd',
        date: new Date(2018, 0, 2, 4),
        likes: ['Guest', 'BigFluff2', 'TheRealBadKitty', 'allThingsCats', 'BigCats'],
      },
      {
        text: 'Though lions still exist in 27 African countries and one Asian country, only seven countries are known to each contain more than 1,000 lions.',
        date: new Date(2018, 0, 2, 2, 4),
        likes: ['BigCats'],
      },
      {
        text: 'Lions are currently listed as "Vulnerable" on the International Union for the Conservation of Nature (IUCN) Red List of Threatened Species.',
        date: new Date(2018, 0, 4, 12, 7),
        likes: [],
      },
      {
        text: 'Please continue to support us! Adopt a Lion Today! https://goo.gl/knrEMd',
        date: new Date(2018, 0, 8, 1, 8),
        likes: ['TheRealBadKitty', 'TheRealTonyTheTiger', 'JonTheSnowLeopard'],
      },
      {
        text: 'Just over a century ago, there were more than 200,000 wild lions living in Africa. Today, there are only about 20,000 of us.',
        date: new Date(2018, 0, 10, 11, 9),
        likes: ['BigCats'],
      },
    ],
    follows: [
      'allThingsCats',
      'BigCats',
      'JonTheSnowLeopard',
      'TheRealTonyTheTiger',
      'futureKing',
    ],
  },
  {
    name: 'Tony Tiger',
    username: 'TheRealTonyTheTiger',
    password: 'Password',
    image: 'https://s3.amazonaws.com/kitter-profile-images/1515801661238',
    posts: [
      {
        text: 'Hello! I just joined Kitter!',
        date: new Date(2017, 11, 20, 1, 2),
        likes: ['TheRealBadKitty'],
      },
      {
        text: 'Thank you all for your support, please continue to support us! Adopt a Tiger Today! https://goo.gl/e9bDFV',
        date: new Date(2017, 11, 24, 3, 8),
        likes: ['TheRealBadKitty', 'LeoTheLion', 'JonTheSnowLeopard'],
      },
      {
        text: 'As top predators, we help to keep the environment healthy...',
        date: new Date(2017, 11, 27, 12, 1),
        likes: [],
      },
      {
        text: '...Without enough predators to prey on the animals, the herbivores can overgraze and damage the land, disrupting the balance of the local environment.',
        date: new Date(2017, 11, 27, 12, 2),
        likes: ['LeoTheLion'],
      },
      {
        text: 'Please help protect my friends! https://goo.gl/e9bDFV',
        date: new Date(2018, 0, 1, 1, 8),
        likes: ['LeoTheLion', 'TheRealBadKitty', 'Guest', 'BigCats'],
      },
      {
        text: "It's a GRRR-EAT start, our numbers are increasing but we need your help to make sure that tigers can thrive again!",
        date: new Date(2018, 0, 1, 2),
        likes: [],
      },
      {
        text: 'Over a century ago, there were as many as 100,000 of us living in Asia. However, after a century of decline, our numbers are on the rise!',
        date: new Date(2018, 0, 2, 1, 30),
        likes: [],
      },
      {
        text: 'At least 3,890 of us remain in the wild, but much more work is needed to protect our species that’s still vulnerable to extinction.',
        date: new Date(2018, 0, 2, 2, 1),
        likes: ['Guest', 'TheRealBadKitty'],
      },
      {
        text: 'Our catastrophic population decline is driven by a range of threats, including poaching for the illegal wildlife trade, ...',
        date: new Date(2018, 0, 4, 12, 30),
        likes: [],
      },
      {
        text: '...overhunting of prey species by local people, habitat loss and fragmentation, and human-tiger conflict.',
        date: new Date(2018, 0, 4, 12, 2),
        likes: [],
      },
      {
        text: 'Ahhh, what a GRRR-EAT time for a nap!!',
        date: new Date(2018, 0, 6, 1, 8),
        likes: ['LeoTheLion', 'TheRealBadKitty'],
      },
      {
        text: 'Adopt a Tiger today! https://goo.gl/e9bDFV',
        date: new Date(2018, 0, 10, 0),
        likes: ['LeoTheLion', 'TheRealBadKitty', 'Guest'],
      },
    ],
    follows: [
      'allThingsCats',
      'BigCats',
      'LeoTheLion',
      'theOnlyOne',
      'Tom',
      'futureKing',
    ],
  },
  {
    name: 'Olly',
    username: 'BigFluff2',
    password: 'Password',
    image: 'https://s3.amazonaws.com/kitter-profile-images/1515627970161',
    posts: [
      {
        text: 'Hello! @TheRealBadKitty told me about Kitter!',
        date: new Date(2017, 10, 30, 12, 1),
        likes: ['TheRealBadKitty', 'allThingsCats', 'Guest'],
      },
      {
        text: 'Is it the weekend yet? I have some things to catch up on, like knocking my humans belongings off ledges.',
        date: new Date(2017, 11, 20, 12, 1),
        likes: ['TheRealBadKitty'],
      },
    ],
    follows: [
      'TheRealBadKitty',
      'allThingsCats',
      'MittensKittens',
      'GaryTheSnail',
      'theOnlyOne',
    ],
  },
  {
    name: 'Chloe',
    username: 'MittensKittens',
    password: 'Password',
    image: 'https://s3.amazonaws.com/kitter-profile-images/1515627976879',
    posts: [
      {
        text: 'Hello Kitties, my big brother @BigFluff2 told me about Kitter!!!',
        date: new Date(2017, 10, 30, 12, 1),
        likes: ['BigFluff2'],
      },
      {
        text: 'I take all my humans hair ties while she is sleeping and hide them.',
        date: new Date(2017, 11, 29, 12, 1),
        likes: [],
      },
      {
        text: 'Today I napped and then got bored so I jumped on @BigFluff2 while he was sleeping. Meow meow.',
        date: new Date(2018, 0, 10, 13, 1),
        likes: ['theOnlyOne'],
      },
    ],
    follows: [
      'allThingsCats',
      'TheRealBadKitty',
      'BigFluff2',
      'SylvesterTheCat',
      'Tom',
    ],
  },
  {
    name: 'Sylvester',
    username: 'SylvesterTheCat',
    password: 'Password',
    image: 'https://s3.amazonaws.com/kitter-profile-images/1516896185221',
    posts: [
      {
        text: "One thing I've learned while chasing the bird...Avoid the dog!",
        date: new Date(2018, 0, 4, 12, 1),
        likes: ['Guest', 'TheRealBadKitty'],
      },
      {
        text: 'Suffering succotash!',
        date: new Date(2018, 0, 7, 12, 1),
        likes: ['BigFluff2', 'MittensKittens'],
      },
      {
        text: "Where there's cheese, there's bound to be mouses.",
        date: new Date(2018, 0, 9, 12, 1),
        likes: ['allThingsCats'],
      },
      {
        text: 'Being a cat is easy if you remember these thsimple rulesth - cat chases bird, cat catches bird, cat eats bird.',
        date: new Date(2018, 0, 11, 12, 1),
        likes: ['LeoTheLion'],
      },
    ],
    follows: [
      'LeoTheLion',
      'futureKing',
      'theOnlyOne',
    ],
  },
  {
    name: 'Tigger',
    username: 'theOnlyOne',
    password: 'Password',
    image: 'https://s3.amazonaws.com/kitter-profile-images/1516897494808',
    posts: [
      {
        text: "Hello, Kitter! I'm Tigger. T-I-double-guh-er. That spells Tigger.",
        date: new Date(2018, 0, 1, 12, 1),
        likes: ['TheRealBadKitty', 'Guest', 'Tom'],
      },
      {
        text: 'The wonderful thing about tiggers, Is tiggers are wonderful things...',
        date: new Date(2018, 0, 3, 12, 1),
        likes: [],
      },
      {
        text: '...Their tops are made out of rubber, Their bottoms are made out of springs...',
        date: new Date(2018, 0, 3, 12, 2),
        likes: ['BigFluff2', 'MittensKittens'],
      },
      {
        text: '...They’re bouncy, trouncy, flouncy, pouncy, fun, fun, fun, fun, fun...',
        date: new Date(2018, 0, 3, 12, 3),
        likes: ['allThingsCats'],
      },
      {
        text: "...But the most wonderful thing about tiggers is I'm the only one!...",
        date: new Date(2018, 0, 3, 12, 4),
        likes: ['LeoTheLion', 'JonTheSnowLeopard'],
      },
      {
        text: "...I'mmmmmmmmmmmmm the only one! Grr.",
        date: new Date(2018, 0, 3, 12, 5),
        likes: ['LeoTheLion', 'JonTheSnowLeopard'],
      },
      {
        text: "Tiggers don't jump, they bounce!",
        date: new Date(2018, 0, 6, 12, 4),
        likes: ['Guest'],
      },
      {
        text: "Well, I gotta go for now. I've got a lot of bouncing to do! Hoo-hoo-hoo! T-T-F-N: ta-ta for now!",
        date: new Date(2018, 0, 15, 12, 4),
        likes: [],
      },
    ],
    follows: [
      'SylvesterTheCat',
      'MittensKittens',
      'TheRealBadKitty',
      'TheRealTonyTheTiger',
      'BigFluff2',
      'futureKing',
    ],
  },
  {
    name: 'Simba',
    username: 'futureKing',
    password: 'Password',
    image: 'https://s3.amazonaws.com/kitter-profile-images/1516898882634',
    posts: [
      {
        text: "I'm gonna be King of Pride Rock. https://goo.gl/d7dDy9",
        date: new Date(2018, 0, 2, 12, 1),
        likes: ['TheRealBadKitty', 'Guest', 'LeoTheLion', 'JonTheSnowLeopard', 'theOnlyOne', 'TheRealTonyTheTiger'],
      },
      {
        text: "My dad just showed me the kingdom and I'm gonna rule it all!",
        date: new Date(2018, 0, 4, 12, 7),
        likes: [],
      },
      {
        text: 'Danger? Hah! I walk on the wild side. I laugh in the face of danger. Ha ha ha ha!',
        date: new Date(2018, 0, 5, 12, 2),
        likes: ['Tom'],
      },
      {
        text: "I'm so hungry I could eat a whole zebra",
        date: new Date(2018, 0, 8, 12, 3),
        likes: ['allThingsCats', 'TheRealBadKitty'],
      },
      {
        text: 'No one saying do this, No one saying be there, No one saying stop that, No one saying see here...',
        date: new Date(2018, 0, 10, 12, 4),
        likes: [],
      },
      {
        text: '...Free to run around all day, Free to do it all my way!',
        date: new Date(2018, 0, 10, 12, 5),
        likes: ['SylvesterTheCat', 'theOnlyOne', 'Guest'],
      },
    ],
    follows: [
      'SylvesterTheCat',
      'theOnlyOne',
      'Tom',
    ],
  },
  {
    name: 'Tom Cat',
    username: 'Tom',
    password: 'Password',
    image: 'https://s3.amazonaws.com/kitter-profile-images/1517000917413',
    posts: [],
    follows: [
      'SylvesterTheCat',
      'theOnlyOne',
    ],
  },
  {
    name: 'Gary',
    username: 'GaryTheSnail',
    password: 'Password',
    image: 'https://s3.amazonaws.com/kitter-profile-images/1517003179172',
    posts: [
      {
        text: 'Meow!',
        date: new Date(2018, 0, 10, 11, 10),
        likes: ['Tom', 'TheCatInTheHat'],
      },
    ],
    follows: [
      'LeoTheLion',
      'JonTheSnowLeopard',
      'futureKing',
    ],
  },
  {
    name: 'Cat',
    username: 'TheCatInTheHat',
    password: 'Password',
    image: 'https://s3.amazonaws.com/kitter-profile-images/1516997151917',
    posts: [
      {
        text: "I'm The Cat in the Hat, there's no doubt about that.",
        date: new Date(2017, 11, 2, 12, 1),
        likes: [],
      },
      {
        text: 'Too wet to go out and too cold to play ball. So we sat in the house. We did nothing at all.',
        date: new Date(2017, 12, 2, 12, 1),
        likes: ['GrumpyCat'],
      },
      {
        text: 'Look at me! Look at me! Look at me NOW! It is fun to have fun. But you have to know how.',
        date: new Date(2018, 0, 2, 12, 1),
        likes: ['Tom'],
      },
      {
        text: 'I know it is wet and the sun is not sunny, but we can have lots of good fun that is funny.',
        date: new Date(2018, 0, 8, 12, 1),
        likes: ['theOnlyOne', 'SylvesterTheCat'],
      },
    ],
    follows: [
      'Garfield',
      'theOnlyOne',
      'SylvesterTheCat',
      'GaryTheSnail',
    ],
  },
  {
    name: 'Garfield',
    username: 'Garfield',
    password: 'Password',
    image: 'https://s3.amazonaws.com/kitter-profile-images/1516995469218',
    posts: [
      {
        text: 'I hate Mondays....',
        date: new Date(2017, 11, 11, 12, 1),
        likes: [],
      },
      {
        text: 'Supermarkets are like a giant United Nations of food, you have coffee from Brazil...',
        date: new Date(2017, 11, 13, 12, 1),
        likes: ['BigCats', 'BigFluff2'],
      },
      {
        text: '...cheese from France, beef from Australia... And lasagna from Heaven!',
        date: new Date(2017, 11, 13, 12, 2),
        likes: [],
      },
      {
        text: 'If I ignore the world maybe it will go away...Except for the lasagna.',
        date: new Date(2017, 11, 17, 12, 1),
        likes: ['GrumpyCat'],
      },
      {
        text: 'Feed me.',
        date: new Date(2017, 11, 20, 12, 1),
        likes: ['TheRealBadKitty', 'TheRealTonyTheTiger'],
      },
      {
        text: 'Another mind-numbing, run-of-the-mill Monday...',
        date: new Date(2017, 11, 25, 12, 1),
        likes: ['GrumpyCat'],
      },
      {
        text: 'I love lasagna!',
        date: new Date(2018, 0, 4, 12, 1),
        likes: ['Guest'],
      },
      {
        text: 'Another Monday...',
        date: new Date(2018, 0, 8, 12, 1),
        likes: [],
      },
    ],
    follows: [
      'SylvesterTheCat',
      'GrumpyCat',
      'TheCatInTheHat',
      'theOnlyOne',
    ],
  },
];

module.exports = data;
