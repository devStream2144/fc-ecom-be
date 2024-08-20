const express = require("express");
const router = express.Router();
const validation = require("../middleware/schemaValidation");
const ProductLikesController = require("../controllers/productLikes.controller");
const authenticator = require("../middleware/authenticator");

router.post("/", validation, ProductLikesController.DoLikeOrDisLike);
router.get(
  "/:productId",
  authenticator,
  ProductLikesController.GetProductLikesAndDislikedOfProduct
);
// router.patch("/:id", validation, UserProfileController.UpdateUserProfile);

module.exports = router;
