const crypto = require("crypto");
const razorpay = require("../config/razorpay");

const createOrder = async (req, res) => {
      console.log("CREATE ORDER API HIT");
  try {
    const { amount } = req.body;

    const options = {
     amount: Math.round(amount * 100),// Razorpay accepts paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      success: true,
      order
    });

  } catch (error) {
  console.log("Razorpay Error:", error);

  res.status(500).json({
    success: false,
    message: error.message
  });
}
};

const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
      )
      .update(body.toString())
      .digest("hex");


    if (expectedSignature === razorpay_signature) {
      return res.json({
        success: true,
        message: "Payment verified successfully",
      });
    }

    return res.status(400).json({
      success: false,
      message: "Invalid payment signature",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Payment verification failed",
    });
  }
};


module.exports = {
  createOrder,
  verifyPayment
};