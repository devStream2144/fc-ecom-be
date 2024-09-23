const express = require("express");
const router = express.Router();
const validator = require("../middleware/schemaValidation");
const ProductLikesController = require("../controllers/productLikes.controller");
const authenticator = require("../middleware/authenticator");
const { LikesAndDislikespaths } = require("../statics/paths");

LikesAndDislikespaths.forEach(({ controller, method, path, auth, valid }) => {
  const options = [];
  if (auth) {
    options.push(authenticator);
  }
  if (valid) {
    options.push(validator);
  }
  router[method](path, ...options, ProductLikesController[controller]);
});

module.exports = router;
