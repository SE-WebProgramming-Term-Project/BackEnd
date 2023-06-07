const express = require("express");
const router = express.Router();

const { User } = require("../models/User");

router.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    console.log(err);
    return err
      ? res.json({ success: false, err })
      : res.status(200).json({ success: true, userInfo: userInfo });
  });
});

module.exports = router;
