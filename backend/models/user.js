const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    minlength: 5,
    maxlength: 40,
  },
});

module.exports = mongoose.model('user', userSchema);
