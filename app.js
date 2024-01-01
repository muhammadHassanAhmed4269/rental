require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const verifyToken = require("./middlewares/verifyToken");
const dbConnector = require("./database/mongo");
dbConnector;

// const orderRoutes = require("./routes/orderRoutes");
// const renterRoutes = require("./routes/renterRoutes");
// const adminRoutes = require("./routes/adminRoutes");

app.get("/", (req, res) => {
  res.send("Server Live");
});

app.use("/auth", authRoutes);

// app.use(verifyToken);

app.use("/auth", userRoutes);
app.use("/products", productRoutes);
// app.use("/orders", orderRoutes);
// app.use("/orders", renterRoutes);
// app.use("/admin", adminRoutes);

// Start Server
const PORT = process.env.PORT || 9876;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
