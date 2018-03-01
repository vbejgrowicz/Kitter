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
const sessionRoutes = require('./routes/session');
const userRoutes = require('./routes/users');
const searchRoutes = require('./routes/search');
const postRoutes = require('./routes/posts');
const userPostRoutes = require('./routes/usersPosts');
// const userPostRoutes = require('./routes/userPosts');
const countRoutes = require('./routes/count');
const followerRoutes = require('./routes/follows');
const imageRoutes = require('./routes/image');

const url = process.env.DATABASE_URL || 'mongodb://localhost/Kitter';

mongoose.connect(url, { useMongoClient: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// if (process.env.NODE_ENV !== 'production') {
//   const webpackMiddleware = require('webpack-dev-middleware'); // eslint-disable-line global-require
//   const webpack = require('webpack'); // eslint-disable-line global-require
//   const webpackConfig = require('../webpack.config.js'); // eslint-disable-line global-require
//   app.use(webpackMiddleware(webpack(webpackConfig)));
// } else {
  app.use(express.static(path.resolve(__dirname, '..', 'build')));
// }

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

app.use('/api/session', sessionRoutes);
app.use('/api/users', userRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users/:id/posts', userPostRoutes);

app.use('/api/image', imageRoutes);
// app.use('/api/user/posts', userPostRoutes);
app.use('/api/follows', followerRoutes);
app.use('/api/count', countRoutes);

// if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build/index.html'));
  });
// }

const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`App listening on port ${port}!`));
