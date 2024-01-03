const User = require("../models/Customer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const { default: axios } = require("axios");
const { isNotFound } = require("entity-checker");

const generateToken = (user) => {
  const payload = {
    user: { _id: user._id },
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1y" });
};

const handleServerError = (err, res) => {
  console.error(err.message);
  res.status(500).send("Server Error");
};

const registerCustomer = async (req, res) => {
  const { username, email, phoneNumber, password } = req.body;

  try {
    const user = await User.findOne({ $or: [{ email }, { phoneNumber }] });

    if (isNotFound(user)) {
      const newUser = new User({
        username,
        email,
        phoneNumber,
        password,
      });

      await newUser.save();
      const token = generateToken(newUser);
      return res.status(200).json({ token });
    }

    return res.status(400).json({ message: "User already exists" });
  } catch (err) {
    handleServerError(err, res);
  }
};

const loginCustomer = async (req, res) => {
  const { email, phoneNumber, password } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ email }, { phoneNumber }],
      password,
    });

    if (isNotFound(user)) {
      return res.status(400).json({ message: "Invalid credentials" });
    } else {
      // const isPasswordValid = await bcrypt.compare(user.password, password);
      // console.log(isPasswordValid);
      // if (isPasswordValid) {
      const token = generateToken(user);
      return res.status(200).json({ token });
      // } else {
      //   return res.status(400).json({ message: "Invalid credentials" });
      // }
    }
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
