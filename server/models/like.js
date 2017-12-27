const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  user: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    username: String,
    name: String,
  },
  post: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  },
}, { versionKey: false });

module.exports = mongoose.model('Like', likeSchema);
