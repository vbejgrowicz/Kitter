const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const User = require('./models/user');
const seedDB = require('./seedData');

const app = express();

mongoose.Promise = global.Promise;

// Require Routes
const indexRoutes = require('./routes/index');
const userPostRoutes = require('./routes/userPosts');
const followingPostRoutes = require('./routes/followingPosts');
const countRoutes = require('./routes/count');
const followerRoutes = require('./routes/follows');
const imageRoutes = require('./routes/image');

mongoose.connect('mongodb://localhost/Kitter', { useMongoClient: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '..', 'build')));
seedDB();

// PASSPORT CONFIG
app.use(session({
  secret: 'Kitter is fun!',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/api', indexRoutes);
app.use('/api/image', imageRoutes);
app.use('/api/user/posts', userPostRoutes);
app.use('/api/following/posts', followingPostRoutes);
app.use('/api/follows', followerRoutes);
app.use('/api/count', countRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
