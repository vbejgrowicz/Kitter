const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  text: String,
  author_id: String,
  author_username: String,
  timePosted: String
}, { versionKey: false });

module.exports = mongoose.model('Post', postSchema);
