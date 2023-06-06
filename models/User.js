const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  id: {
    type: String,
    maxlength: 15,
    unique: 1,
  },
  pw: {
    type: String,
    minlength: 4,
    trim: true,
  },
  phone: {
    type: String,
    minlength: 10,
  },
  birth: {
    type: String,
  },
  email: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
  },
  detailAddress: {
    type: String,
  },
  type: {
    type: Number,
    maxlength: 1,
  }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };