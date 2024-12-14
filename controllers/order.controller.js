const OrderService = require("../services/order.service");
const ControllerFactory = require("../controllers/controllerFactory");

const Controller = (Paths) => {
  const OrderController = ControllerFactory(Paths, OrderService);
  return OrderController;
};

module.exports = Controller;
