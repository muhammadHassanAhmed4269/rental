const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

router.put("/:id", customerController.updateProfile);

router.put("/:id", customerController.uploadProfilePicture);

router.delete("/:id", customerController.deleteProfile);

module.exports = router;
