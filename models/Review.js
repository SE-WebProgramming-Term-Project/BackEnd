const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  reviewNum: {
    type: Number,
    unique: 1,
  },
  score: {
    type: Number,
  },
  reviewContent: {
    type: String,
  },
  writer: {
    type: String,
  },
  product: {
    type: String, // pizza ID(String)
  }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review };