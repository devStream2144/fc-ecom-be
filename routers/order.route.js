const OrderController = require("../controllers/order.controller.js");
const { OrderPaths } = require("../statics/paths.js");
const createRouter = require("../routers/routerFactory.js");

const orderRouter = createRouter(OrderPaths, OrderController);

module.exports = orderRouter;
