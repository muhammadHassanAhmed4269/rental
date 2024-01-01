const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const axios = require("axios");

const AuthController = {
  registerUser: async (req, res) => {
    const { username, email, phoneNumber, password } = req.body;

    try {
      let user = await User.findOne({ $or: [{ email }, { phoneNumber }] });

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

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },

  loginUser: async (req, res) => {
    const { emailOrPhone, password } = req.body;

    try {
      let user = await User.findOne({
        $or: [{ email: emailOrPhone }, { phoneNumber: emailOrPhone }],
      });

      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },

  loginWithGoogle: async (req, res) => {
    const { tokenId } = req.body;

    try {
      const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
      const ticket = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      const { email, name } = payload;

      let user = await User.findOne({ email });

      if (!user) {
        user = new User({
          username: name,
          email,
        });
        await user.save();
      }

      const jwtPayload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        jwtPayload,
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },

  loginWithFacebook: async (req, res) => {
    const { accessToken } = req.body;

    try {
      const response = await axios.get(
        `https://graph.facebook.com/v13.0/me?fields=id,name,email&access_token=${accessToken}`
      );
      const { email, name } = response.data;

      let user = await User.findOne({ email });

      if (!user) {
        user = new User({
          username: name,
          email,
        });
        await user.save();
      }

      const jwtPayload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        jwtPayload,
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
};

module.exports = AuthController;
