const ProductsService = require("../services/product.service");
const { ProductPaths } = require("../statics/paths");
const ControllerFactory = require("../controllers/controllerFactory");

const ProductController = ControllerFactory(ProductPaths, ProductsService);

// const GetProductServices = (serviceName, data, next, cb) => {
//   return ProductsService[serviceName](
//     data,
//     next,
//     (err, statusCode, data, message) => {
//       cb({ err, statusCode, data, message });
//     }
//   );
// };

// const GetProductController = (controller, data, next, cb) => {
//   return [controller](data, next, (err, statusCode, data, message) => {
//     cb({ err, statusCode, data, message });
//   });
// };

// const ProductController = ProductPaths.reduce(
//   (controllers, { controller, service }) => {
//     controllers[controller] = async (req, res, next) => {
//       console.log("uploaded files : ", req.files);
//       if (!service) {
//         GetProductController(controller);
//       }
//       GetProductServices(
//         service,
//         {
//           body: req?.files?.length ? req.files : req.body || {},
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

module.exports = ProductController;
