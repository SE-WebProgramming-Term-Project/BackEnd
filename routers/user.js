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

router.get("/login", (req, res) => {
  const { id } = req.query;

  User.find({ id }, (err, userData) => {
    if (err) {
      console.log(err);
      return res.json({
        loginSuccess: false,
        message: "오류가 발생했습니다.",
      });
    }

    if (!userData || userData.length === 0) {
      return res.json({
        loginSuccess: false,
        message: "ID가 존재하지 않습니다.",
      });
    }

    const pw = userData[0].pw;
    
    return res.json({
      loginSuccess: true,
      pw: pw,
    });
  });
});

module.exports = router;
