const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: 1,
  },
  pizzaId: {
    type: Number,
  },
  score: {
    type: Number,
  },
  evaluation: {
    type: String,
  },
  author: {
    type: String,
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review };