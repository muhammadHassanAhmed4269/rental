const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true },
  phoneNumber: { type: String, unique: true },
  password: { type: String },
  googleId: { type: String },
  facebookId: { type: String },
  profilePicture: { type: String },
  location: { type: String },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
