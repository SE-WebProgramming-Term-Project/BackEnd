const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema({
  // id: {
  //   type: Number,
  //   unique: 1,
  // },
  img: {
    type: String,
  },
  title: {
    type: String,
  },
  tag: {
    type: String,
  },
  large: {
    type: Number,
  },
  regular: {
    type: Number,
  },
  update: {
    type: String,
  },
  category: {
    type: String,
  },
  metarial: {
    type: [String],
  },
  count: {
    type: Number,
    default: 0,
  }
});

const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = { Pizza };
