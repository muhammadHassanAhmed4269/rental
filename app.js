require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const verifyToken = require("./middlewares/verifyToken");
// const orderRoutes = require("./routes/orderRoutes");
// const renterRoutes = require("./routes/renterRoutes");
// const adminRoutes = require("./routes/adminRoutes");

app.use("/auth", authRoutes);

app.use(verifyToken);

app.use("/auth", userRoutes);
app.use("/products", productRoutes);
// app.use("/orders", orderRoutes);
// app.use("/orders", renterRoutes);
// app.use("/admin", adminRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});