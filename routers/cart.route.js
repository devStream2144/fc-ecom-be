const express = require("express");
const router = express.Router();
const validation = require("../middleware/schemaValidation");
const CartController = require("../controllers/cart.controller");
const authenticator = require("../middleware/authenticator");

router.post("/", validation, CartController.AddToCart);

module.exports = router;
