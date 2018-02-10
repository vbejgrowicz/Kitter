const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
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
};

UserSchema.plugin(passportLocalMongoose, options);

module.exports = mongoose.model('User', UserSchema);
