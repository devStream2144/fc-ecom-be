const express = require("express");
const router = express.Router();
const validator = require("../middleware/schemaValidation");
const UserController = require("../controllers/user.controller");
const authenticator = require("../middleware/authenticator");
const upload = require("../middleware/multer");
const { UserPaths } = require("../statics/paths");

UserPaths.forEach(({ controller, method, path, auth, valid }) => {
  const options = [];
  if (auth) {
    options.push(authenticator);
  }
  if (valid) {
    options.push(validator);
  }
  router[method](path, ...options, UserController[controller]);
});

router.post("/upload-profile", upload.single("image"), (req, res) => {
  res
    .status(200)
    .json({ message: "File uploaded successfully", filename: req.filename });
});

module.exports = router;
