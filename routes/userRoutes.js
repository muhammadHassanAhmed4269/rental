const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

// Update user's personal profile
router.put("/profile", UserController.updateUserProfile);

// Upload a profile picture for the user
router.put("/profile-picture", UserController.uploadProfilePicture);

// Delete user's profile
router.delete("/profile", UserController.deleteUserProfile);

// Route to set user location
router.put("/user/location", UserController.setUserLocation);

module.exports = router;
