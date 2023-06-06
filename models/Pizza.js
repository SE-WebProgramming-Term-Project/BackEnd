const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema({
  id: {
    type: String,
    unique: 1,
  },
  img: {
    type: String,
  },
  title: {
    type: String,
  },
  tag: {
    type: [String],
  },
  large: {
    type: Number,
  },
  regular: {
    type: Number,
  },
  update: {
    type: Date,
  },
  category: {
    type: String,
  },
  metarial: {
    type: [String],
  }
});

const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = { Pizza };
