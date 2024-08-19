const express = require("express");
const router = express.Router();
const validation = require("../middleware/schemaValidation");
const productController = require("../controllers/product.controller");

router.post("/", productController.AddProduct);

module.exports = router;
