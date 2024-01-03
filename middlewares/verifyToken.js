const jwt = require("jsonwebtoken");
const User = require("../models/Customer");
const { isNotFound } = require("entity-checker");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (isNotFound(token)) {
    return res.status(403).json({ message: "Unauthorized request" });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Failed to authenticate token" });
    }
    try {
      const user = await User.findById(decoded.user._id);
      console.log(user);
      if (isNotFound(user)) {
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
