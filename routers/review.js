const express = require("express");
const router = express.Router();

const { Review } = require("../models/Review");

router.post("/submit", (req, res) => {
  const review = new Review(req.body);

  review.save((err, reviewInfo) => {
    console.log(err);
    return err
      ? res.json({ success: false, err })
      : res.status(200).json({ success: true, reviewInfo: reviewInfo });
  });
});

router.get("/view", (req, res) => {
    Review.find({ pizzaId: 1 }, (err, reviews) => {
      if (err) {
        return res.json({
          reviewSuccess: false,
          message: "오류가 발생했습니다.",
        });
      }
  
      if (!reviews || reviews.length === 0) {
        return res.json({
          reviewSuccess: false,
          message: "피자 ID가 존재하지 않습니다.",
        });
      }
  
      const reviewData = reviews.map((review) => {
        return {
          id: review.id,
          pizzaId: review.pizzaId,
          score: review.score,
          evaluation: review.evaluation,
          author: review.author,
        };
      });
  
      res.json({
        reviewSuccess: true,
        reviewData: reviewData,
      });
    });
  });

module.exports = router;
