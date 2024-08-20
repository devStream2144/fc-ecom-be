const express = require("express");
const router = express.Router();
const validation = require("../middleware/schemaValidation");
const productController = require("../controllers/product.controller");
const authenticator = require("../middleware/authenticator");

router.post("/", validation, productController.AddProduct);
router.get("/", authenticator, productController.GetProducts);
router.get("/:id", authenticator, productController.GetProductById);
router.patch("/:id", authenticator, productController.UpdateProduct);
router.delete("/:id", authenticator, productController.DeleteProduct);

module.exports = router;
