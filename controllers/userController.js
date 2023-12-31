const User = require("../models/User");

const UserController = {
  updateUserProfile: async (req, res) => {
    const { username, email, phoneNumber, profilePicture } = req.body;

    try {
      let user = await User.findById(req.user.id);

      user.username = username || user.username;
      user.email = email || user.email;
      user.phoneNumber = phoneNumber || user.phoneNumber;
      user.profilePicture = profilePicture || user.profilePicture;

      await user.save();

      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },

  uploadProfilePicture: async (req, res) => {
    const { profilePicture } = req.body;

    try {
      let user = await User.findById(req.user.id);

      user.profilePicture = profilePicture;

      await user.save();

      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },

  deleteUserProfile: async (req, res) => {
    try {
      await User.findByIdAndRemove(req.user.id);

      res.json({ message: "User deleted" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },

  setUserLocation: async (req, res) => {
    try {
      const { userId, location } = req.body;

      if (!userId || !location) {
        return res
          .status(400)
          .json({ message: "User ID and location are required" });
      }

      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { location },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json({ message: "Location updated successfully", user: updatedUser });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  },
};

module.exports = UserController;
