const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  following: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, { versionKey: false });

module.exports = mongoose.model('Follow', followSchema);
