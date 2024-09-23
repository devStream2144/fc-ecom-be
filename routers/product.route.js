const express = require("express");
const router = express.Router();
const validator = require("../middleware/schemaValidation");
const ProductController = require("../controllers/product.controller");
const authenticator = require("../middleware/authenticator");
const { ProductPaths } = require("../statics/paths");
const upload = require("../middleware/multer");

ProductPaths.forEach(({ controller, method, path, auth, valid }) => {
  const options = [];
  if (auth) {
    options.push(authenticator);
  }
  if (valid) {
    options.push(validator);
  }
  if (controller === "UploadProductImages") {
    options.push(upload.array("image"));
  }
  router[method](path, ...options, ProductController[controller]);
});

// router.post("/upload-profile", upload.single("image"), (req, res) => {
//   res
//     .status(200)
//     .json({ message: "File uploaded successfully", filename: req.filename });
// });

module.exports = router;
