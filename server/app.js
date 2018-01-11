const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const User = require('./models/user');
const seedDB = require('./seedData');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config(); // eslint-disable-line global-require
}

const app = express();

mongoose.Promise = global.Promise;

// Require Routes
const indexRoutes = require('./routes/index');
const userPostRoutes = require('./routes/userPosts');
const followingPostRoutes = require('./routes/followingPosts');
const countRoutes = require('./routes/count');
const followerRoutes = require('./routes/follows');
const imageRoutes = require('./routes/image');

const url = process.env.DATABASEURL || 'mongodb://localhost/Kitter';

mongoose.connect(url, { useMongoClient: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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

if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware'); // eslint-disable-line global-require
  const webpack = require('webpack'); // eslint-disable-line global-require
  const webpackConfig = require('../webpack.config.js'); // eslint-disable-line global-require
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
  });
}

const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`App listening on port ${port}!`));
