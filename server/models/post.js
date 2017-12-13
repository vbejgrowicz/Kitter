const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  text: String,
  author_id: String,
  author_username: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    username: String,
    name: String
  },
  timePosted: String
}, { versionKey: false });

module.exports = mongoose.model('Post', postSchema);
