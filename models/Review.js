// const mongoose = require("mongoose");

// // const AutoIncrement = require("mongoose-sequence")(mongoose);
// // const collectionName = "review";

// // const reviewSchema = new mongoose.Schema(
// //   {
// //     pizzaId: { type: Number },
// //     score: { type: Number },
// //     evaluation: { type: String },
// //     author: { type: String },
// //   },
// //   {
// //     collection: collectionName,
// //     versionKey: false,
// //   }
// // );

// // reviewSchema.plugin(AutoIncrement, { inc_field: "id" });

// // const Review = mongoose.model("Review", reviewSchema);

// const AutoIncrementFactory = require("mongoose-sequence");
// const AutoIncrement = AutoIncrementFactory(mongoose);

// const reviewSchema = mongoose.Schema({
//   // id: {
//   //   type: Number,
//   //   unique: 1,
//   //   default: undefined,
//   // },
//   pizzaId: {
//     type: Number,
//   },
//   score: {
//     type: Number,
//   },
//   evaluation: {
//     type: String,
//   },
//   author: {
//     type: String,
//   },
// });

// reviewSchema.plugin(AutoIncrement, { inc_field: "_id" });

// // const Review = mongoose.model("Review", reviewSchema);

// module.exports = Review;

const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  // id: {
  //   type: Number,
  //   unique: 1,
  // },
  pizzaId: {
    type: String,
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
