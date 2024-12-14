const ProductsService = require("../services/product.service");
const ControllerFactory = require("../controllers/controllerFactory");

const Controller = (Paths) => {
  const ProductController = ControllerFactory(Paths, ProductsService);
  return ProductController;
};

module.exports = Controller;
