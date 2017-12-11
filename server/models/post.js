const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  text: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    username: String
  },
  timePosted: String
});

module.exports = mongoose.model('Post', postSchema);
