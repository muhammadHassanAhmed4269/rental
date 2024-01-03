require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
const authRoutes = require("./routes/authRoutes");
const customerRoutes = require("./routes/customerRoutes");
const productRoutes = require("./routes/productRoutes");
const verifyToken = require("./middlewares/verifyToken");
const dbConnector = require("./database/mongo");
const Token = require("./models/Token");
const { isNotFound } = require("entity-checker");
dbConnector;

// const orderRoutes = require("./routes/orderRoutes");
// const renterRoutes = require("./routes/renterRoutes");
// const adminRoutes = require("./routes/adminRoutes");

app.get("/", (req, res) => {
  res.send("Server Live");
});

app.use("/auth", authRoutes);

app.use(verifyToken);

app.use("/customers", customerRoutes);
app.use("/products", productRoutes);

app.get("/logout", async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (isNotFound(token)) {
      return res.status(400).json({ message: "Authorization token missing" });
    }

    const getToken = await Token.findOne({
      token,
      assignedTo: req.user._id,
    });

    if (isNotFound(getToken) || getToken.status !== "Valid") {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    getToken.status = "Expired";
    await getToken.save();

    return res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
});

// app.use("/orders", orderRoutes);
// app.use("/orders", renterRoutes);
// app.use("/admin", adminRoutes);

app.use((req, res, next) => {
  res.status(404).send("404 - Invalid Route");
});

// Start Server
const PORT = process.env.PORT || 9876;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
