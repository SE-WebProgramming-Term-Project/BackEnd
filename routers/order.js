const express = require("express");
const router = express.Router();

const { Order } = require("../models/Order");

router.post("/buy", (req, res) => {
  const order = new Order(req.body);

  order.save((err, orderInfo) => {
    console.log(err);
    return err
      ? res.json({ success: false, err })
      : res.status(200).json({ success: true, orderInfo: orderInfo });
  });
});

router.get("/view", (req, res) => {
  const { id } = req.query;

  Order.find({ id }, (err, orders) => {
    if (err) {
      console.log(err);
      return res.json({
        orderSuccess: false,
        isNone: false,
        message: "오류가 발생했습니다.",
      });
    }

    if (!orders || orders.length === 0) {
      return res.json({
        orderSuccess: false,
        isNone: true,
        message: "주문내역이 존재하지 않습니다.",
      });
    }

    const orderData = orders.map((order) => {
      return {
        orderNum: order.orderNum,
        id: order.id,
        orderDate: order.orderDate,
        orderMenu: order.orderMenu,
        totalPrice: order.totalPrice,
        dest: order.dest,
        store: order.store,
      };
    });

    res.json({
      orderSuccess: true,
      isNone: false,
      orderData: orderData,
    });
  });
});

router.get("/count", (req, res) => {
  const { orderMenu } = req.query;

  Order.count({ orderMenu }, (err, count) => {
    if (err) {
      console.log(err);
      return res.json({
        countSuccess: false,
        message: "오류가 발생했습니다.",
      });
    }

    if (!count || count.length === 0) {
      return res.json({
        countSuccess: false,
        message: "주문내역이 존재하지 않습니다.",
      });
    }

    res.json({
      countSuccess: true,
      countData: count,
    });
  });
});

router.get("/findAll", (req, res) => {
  Order.find({}, (err, orders) => {
    if (err) {
      console.log(err);
      return res.json({
        findAllSuccess: false,
        message: "오류가 발생했습니다.",
      });
    }

    if (!orders || orders.length === 0) {
      return res.json({
        findAllSuccess: false,
        message: "주문내역이 존재하지 않습니다.",
      });
    }

    const orderData = orders.map((order) => {
      return {
        orderNum: order.orderNum,
        id: order.id,
        orderDate: order.orderDate,
        orderMenu: order.orderMenu,
        totalPrice: order.totalPrice,
        dest: order.dest,
        store: order.store,
      };
    });

    res.json({
      findAllSuccess: true,
      orderData: orderData,
    });
  });
});

module.exports = router;
