const express = require("express");
const validation = require("../middleware/schemaValidation");
const authenticator = require("../middleware/authenticator");

const createRouter = (Paths, Controller) => {
  const router = express.Router();
  Paths.forEach(({ controller, method, path, auth, valid }) => {
    const options = [];
    if (auth) {
      options.push(authenticator);
    }
    if (valid) {
      options.push(validation);
    }
    router[method](path, ...options, Controller[controller]);
  });
  return router;
};

module.exports = createRouter;
