const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userValidators = [
  {
    validator(v) {
      const usernameRegex = /^[a-zA-Z0-9_]+$/;
      return v.match(usernameRegex);
    },
    message: "Username can only have letters, numbers and '_'",
  }, {
    validator(v) {
      const invalid = ['signup', 'login', 'search'];
      return !invalid.includes(v);
    },
    message: "Username '{VALUE}' is unavailable",
  },
];

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
  },
  userID: {
    type: String,
    trim: true,
    lowercase: true,
    validate: userValidators,
  },
  name: {
    type: String,
    required: [true, 'No name was given'],
  },
  password: String,
  image: String,
}, { versionKey: false });

const options = {
  passwordValidator(password, cb) {
    if (password.length >= 6) {
      cb();
    } else {
      cb({ message: 'Password must be at least 6 characters.' });
    }
  },
  usernameField: 'userID',
};

UserSchema.plugin(passportLocalMongoose, options);

module.exports = mongoose.model('User', UserSchema);
