const jwt = require("jsonwebtoken");
const User = require("../models/Customer");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: "Token is not provided" });
  }

  jwt.verify(token, "your-secret-key", async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Failed to authenticate token" });
    }

    try {
      const user = await User.findById(decoded.userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      req.user = user;
      next();
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });
};

module.exports = verifyToken;
