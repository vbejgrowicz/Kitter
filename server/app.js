const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const app = express();
const User = require('./models/user');
const Post = require('./models/post');
mongoose.Promise = global.Promise;

// Require Routes
const indexRoutes = require('./routes/index');
const postRoutes = require('./routes/posts');

mongoose.connect('mongodb://localhost/Kitter', {useMongoClient: true});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// PASSPORT CONFIG
app.use(session({
  secret: 'Kitter is fun!',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/api', indexRoutes);
app.use('/api/posts', postRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
