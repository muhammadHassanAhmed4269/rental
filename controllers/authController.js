const User = require("../models/Customer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const { default: axios } = require("axios");

const generateToken = (user) => {
  const payload = {
    user: { id: user.id },
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 });
};

const handleServerError = (err, res) => {
  console.error(err.message);
  res.status(500).send("Server Error");
};

const registerCustomer = async (req, res) => {
  const { username, email, phoneNumber, password } = req.body;

  try {
    const user = await User.findOne({ $or: [{ email }, { phoneNumber }] });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User({
      username,
      email,
      phoneNumber,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    const token = generateToken(user);
    res.json({ token });
  } catch (err) {
    handleServerError(err, res);
  }
};

const loginCustomer = async (req, res) => {
  const { emailOrPhone, password } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ email: emailOrPhone }, { phoneNumber: emailOrPhone }],
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);
    res.json({ token });
  } catch (err) {
    handleServerError(err, res);
  }
};

const loginWithGoogle = async (req, res) => {
  const { tokenId } = req.body;

  try {
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name } = payload;

    const user = await User.findOne({ email });

    if (!user) {
      user = new User({
        username: name,
        email,
      });
      await user.save();
    }

    const token = generateToken(user);
    res.json({ token });
  } catch (err) {
    handleServerError(err, res);
  }
};

const loginWithFacebook = async (req, res) => {
  const { accessToken } = req.body;

  try {
    const response = await axios.get(
      `https://graph.facebook.com/v13.0/me?fields=id,name,email&access_token=${accessToken}`
    );
    const { email, name } = response.data;

    const user = await User.findOne({ email });

    if (!user) {
      user = new User({
        username: name,
        email,
      });
      await user.save();
    }

    const token = generateToken(user);
    res.json({ token });
  } catch (err) {
    handleServerError(err, res);
  }
};

module.exports = {
  registerCustomer,
  loginCustomer,
  loginWithGoogle,
  loginWithFacebook,
};
