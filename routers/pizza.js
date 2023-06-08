const express = require("express");
const router = express.Router();

const { Pizza } = require("../models/Pizza");

router.post("/submit", (req, res) => {
  const pizza = req.body;

  Pizza.create(pizza, (err, pizzaInfo) => {
    console.log(err);
    return err
      ? res.json({ success: false, err })
      : res.status(200).json({ success: true, pizzaInfo: pizzaInfo });
  });
});

router.get("/view", (req, res) => {
  const { id } = req.query;

  Pizza.find({ id }, (err, pizzaData) => {
    console.log(pizzaData);

    if (err) {
      console.log(err);
      return res.json({
        pizzaSuccess: false,
        message: "오류가 발생했습니다.",
      });
    }

    if (!pizzaData || pizzaData.length === 0) {
      return res.json({
        pizzaSuccess: false,
        message: "피자가 존재하지 않습니다.",
      });
    }

    const pizza = {
      id: pizzaData[0].id,
      img: pizzaData[0].img,
      title: pizzaData[0].title,
      tag: pizzaData[0].tag,
      large: pizzaData[0].large,
      regular: pizzaData[0].regular,
      update: pizzaData[0].update,
      category: pizzaData[0].category,
      metarial: pizzaData[0].metarial,
    };

    res.json({
      pizzaSuccess: true,
      pizzaData: pizza,
    });
  });
});

module.exports = router;
