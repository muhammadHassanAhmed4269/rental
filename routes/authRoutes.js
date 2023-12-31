const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");

// Register a new user
router.post("/register", AuthController.registerUser);

// Login user
router.post("/login", AuthController.loginUser);

// Login/Signup with Google Account
router.post("/google-login", AuthController.loginWithGoogle);

// Login/Signup with Facebook Account
router.post("/facebook-login", AuthController.loginWithFacebook);

module.exports = router;
