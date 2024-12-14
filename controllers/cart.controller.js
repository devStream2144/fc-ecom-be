const CartService = require("../services/cart.service");
const ControllerFactory = require("../controllers/controllerFactory");

const Controller = (Paths) => {
  const controller = ControllerFactory(Paths, CartService);
  return controller;
};

module.exports = Controller;
