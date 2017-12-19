const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
  user: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    username: String,
    name: String,
  },
  following: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    username: String,
    name: String,
  },
}, { versionKey: false });

module.exports = mongoose.model('Follow', followSchema);
