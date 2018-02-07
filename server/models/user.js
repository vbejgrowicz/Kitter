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

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
