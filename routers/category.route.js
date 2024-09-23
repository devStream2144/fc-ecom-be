const express = require("express");
const router = express.Router();
const validation = require("../middleware/schemaValidation");
const categoryController = require("../controllers/category.controller");
const { CategoriesPaths } = require("../statics/paths");
const authenticator = require("../middleware/authenticator");
const validator = require("../middleware/schemaValidation");

CategoriesPaths.forEach(({ controller, method, path, auth, valid }) => {
  const options = [];
  if (auth) {
    options.push(authenticator);
  }
  if (valid) {
    options.push(validator);
  }
  router[method](path, ...options, categoryController[controller]);
});

module.exports = router;
