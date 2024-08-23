const express = require("express");
const router = express.Router();
const validation = require("../middleware/schemaValidation");
const CartController = require("../controllers/cart.controller");
const authenticator = require("../middleware/authenticator");
const { CartsPaths } = require("../statics/paths.js");

CartsPaths.forEach(({ controller, method, path, auth, valid }) => {
  const options = [];
  if (auth) {
    options.push(authenticator);
  }
  if (valid) {
    options.push(validation);
  }
  router[method](path, ...options, CartController[controller]);
});

module.exports = router;
