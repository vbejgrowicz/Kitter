const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
  },
  userID: {
    type: String,
    trim: true,
    lowercase: true,
    validate: {
      validator(v) {
        const usernameRegex = /^[a-zA-Z0-9_]+$/;
        return v.match(usernameRegex);
      },
      message: "Username can only have letters, numbers and '_'!",
    },
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
