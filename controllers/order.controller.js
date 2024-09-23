const OrderService = require("../services/order.service");
const { OrderPaths } = require("../statics/paths");
const ControllerFactory = require("../controllers/controllerFactory");

const OrderController = ControllerFactory(OrderPaths, OrderService);

// const GetOrderServices = (serviceName, data, next, cb) => {
//   return OrderService[serviceName](
//     data,
//     next,
//     (err, statusCode, data, message) => {
//       cb({ err, statusCode, data, message });
//     }
//   );
// };

// const OrderController = OrderPaths.reduce(
//   (controllers, { controller, service }) => {
//     controllers[controller] = async (req, res, next) => {
//       GetOrderServices(
//         service,
//         {
//           body: req.body || {},
//           id: req.params.id || "",
//           roles: req.roles || [],
//         },
//         next,
//         (response) => {
//           res.status(response.statusCode).json({
//             err: response.err,
//             data: response.data,
//             message: response.message,
//           });
//         }
//       );
//     };
//     return controllers;
//   },
//   {}
// );

module.exports = OrderController;
