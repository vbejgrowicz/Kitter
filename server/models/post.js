const mongoose = require('mongoose');
const likeSchema = require('./like');

const postSchema = new mongoose.Schema({
  text: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    username: String,
    name: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  likes: [likeSchema],
}, { versionKey: false });

module.exports = mongoose.model('Post', postSchema);
