const express = require("express");
const router = express.Router();
const validation = require("../middleware/schemaValidation");
const UserController = require("../controllers/user.controller");
const authorization = require("../middleware/authenticator");
const upload = require("../middleware/multer");

router.post("/", authorization, validation, UserController.AddUser);
router.get("/", authorization, UserController.GetUsers);
router.post("/login", UserController.UserLogin);
router.get("/:id", authorization, UserController.GetUserById);
router.patch("/:id", UserController.UpdateUser);
router.delete("/:id", authorization, UserController.DeletedUser);

router.post("/roles/:id", authorization, UserController.AddNewRoles);
router.delete("/roles/:id", authorization, UserController.DeleteRoles);

router.post("/upload-profile", upload.single("image"), (req, res) => {
  res
    .status(200)
    .json({ message: "File uploaded successfully", filename: req.filename });
});

module.exports = router;
