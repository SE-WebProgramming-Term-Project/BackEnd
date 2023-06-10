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
    const type = userData[0].type;

    return res.json({
      loginSuccess: true,
      type: type,
      pw: pw,
    });
  });
});

router.get("/view", (req, res) => {
  const { id } = req.query;

  User.find({ id }, (err, userData) => {
    if (err) {
      console.log(err);
      return res.json({
        userSuccess: false,
        message: "오류가 발생했습니다.",
      });
    }
    if (!userData || userData.length === 0) {
      return res.json({
        userSuccess: false,
        message: "유저 ID가 존재하지 않습니다.",
      });
    }

    const user = {
      name: userData[0].name,
      id: userData[0].id,
      pw: userData[0].pw,
      phone: userData[0].phone,
      birth: userData[0].birth,
      email: userData[0].email,
      address: userData[0].address,
      detailAddress: userData[0].detailAddress,
      type: userData[0].type,
    };

    res.json({
      userSuccess: true,
      userData: user,
    });
  });
});

router.post("/config", (req, res) => {
  const user = req.body;

  console.log(user);

  User.updateMany({ id: user.id }, { $set: user }, (err, userInfo) => {
    console.log(err);
    return err
      ? res.json({ success: false, err })
      : res.status(200).json({ success: true, userInfo: userInfo });
  });
});

module.exports = router;
