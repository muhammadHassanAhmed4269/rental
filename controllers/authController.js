const User = require("../models/Customer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { OAuth2Client, auth } = require("google-auth-library");
const { default: axios } = require("axios");
const { isNotFound } = require("entity-checker");
const Token = require("../models/Token");

const generateToken = async (user) => {
  const payload = {
    user: { _id: user._id },
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1y" });

  const getToken = await Token.findOne({ assignedTo: payload.user._id });
  if (isNotFound(getToken)) {
    const newToken = new Token({
      token,
      status: "Valid",
      assignedTo: payload.user._id,
    });

    await newToken.save();
    return newToken.token;
  } else if (getToken && getToken.status === "Expired") {
    const newToken = new Token({
      token,
      status: "Valid",
      assignedTo: payload.user._id,
    });

    await newToken.save();
    return newToken.token;
  } else {
    return getToken.token;
  }
};

const handleServerError = (err, res) => {
  console.error(err.message);
  res.status(500).send("Server Error");
};

const registerCustomer = async (req, res) => {
  const { username, email, phoneNumber, password } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ email }, { phoneNumber }],
      password,
    });

    if (isNotFound(user)) {
      const formData = {};

      if (username) {
        formData.username = username;
      }

      if (email) {
        formData.email = email;
      }

      if (phoneNumber) {
        formData.phoneNumber = phoneNumber;
      }

      if (password) {
        formData.password = password;
      }

      const newUser = new User({
        username,
        email,
        phoneNumber,
        password,
      });

      await newUser.save();
      const token = await generateToken(newUser);
      return res.status(200).json({ token });
    } else {
      return res.status(400).json({ message: "User already exists" });
    }
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
      const token = await generateToken(user);
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
  console.log({ tokenId });

  try {
    // Initialize the OAuth2Client with your Google Client ID
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

    console.log({ client });

    // Verify the Google ID Token
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    // Get the user payload from the verified token
    const payload = ticket.getPayload();
    const { email, name } = payload;

    console.log({ payload });

    // Check if the user exists in your database
    let user = await User.findOne({ email });

    // If user does not exist, create a new user
    if (!user) {
      user = new User({
        username: name,
        email,
      });
      await user.save();
    }

    // Generate a token for the user (You should have your own token generation logic)
    const token = generateToken(user);

    // Respond with the generated token
    res.json({ token });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};

const loginWithFacebook = async (req, res) => {
  const { accessToken } = req.body;
  console.log({ accessToken });

  try {
    const response = await axios.get(
      `https://graph.facebook.com/v13.0/me?fields=id,name,email&access_token=${accessToken}`
    );
    const { email, name } = response.data;

    let user = await User.findOne({ email });

    if (isNotFound(user)) {
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
