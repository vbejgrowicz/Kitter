const mongoose = require('mongoose');
// const likeSchema = require('./like');


const postSchema = new mongoose.Schema({
  text: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
}, { versionKey: false });

module.exports = mongoose.model('Post', postSchema);
