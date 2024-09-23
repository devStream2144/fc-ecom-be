const express = require("express");
const router = express.Router();
const validator = require("../middleware/schemaValidation");
const UserProfileController = require("../controllers/userProfile.controller");
const authenticator = require("../middleware/authenticator");
const { UserProfilepath } = require("../statics/paths");

UserProfilepath.forEach(({ controller, method, path, auth, valid }) => {
  const options = [];
  if (auth) {
    options.push(authenticator);
  }
  if (valid) {
    options.push(validator);
  }
  router[method](path, ...options, UserProfileController[controller]);
});

module.exports = router;
