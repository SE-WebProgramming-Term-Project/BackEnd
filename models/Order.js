const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  // orderNum: {
  //   type: Number,
  //   unique: 1,
  // },
  id: {
    type: String,
    maxlength: 15,
  },
  orderDate: {
    type: String,
  },
  orderMenu: {
    type: [Number],
  },
  totalPrice: {
    type: Number,
  },
  dest: {
    type: String,
  },
  store: {
    type: String,
  },
  isReviewed: {
    type:Boolean,
  }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = { Order };