const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

const paymentRoutes = require("./routes/payment.routes");
const orderRoutes = require("./routes/order.routes");
app.use("/api/payment", paymentRoutes);
app.use("/api/orders", orderRoutes);

// Test API
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});