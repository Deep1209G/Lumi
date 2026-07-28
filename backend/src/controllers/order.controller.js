const Order = require("../models/Order");

const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);

    res.status(201).json({
      success: true,
      order,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Order creation failed",
    });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      orders,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Fetching orders failed",
    });
  }
};

module.exports = {
  createOrder,
   getOrders,
};