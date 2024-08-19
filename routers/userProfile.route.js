const express = require("express");
const router = express.Router();
const validation = require("../middleware/schemaValidation");
const UserProfileController = require("../controllers/userProfile.controller");
const authorization = require("../middleware/authenticator");

router.post("/", validation, UserProfileController.AddUserProfile);
router.patch("/:id", validation, UserProfileController.UpdateUserProfile);

module.exports = router;
