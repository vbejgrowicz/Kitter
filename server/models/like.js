const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  username: String,
  name: String,
}, { versionKey: false });

module.exports = likeSchema;
