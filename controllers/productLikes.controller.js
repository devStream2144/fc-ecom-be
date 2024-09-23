const productLikesService = require("../services/productLikes.service");
const { LikesAndDislikespaths } = require("../statics/paths");
const ControllerFactory = require("../controllers/controllerFactory");

const ProductLikesController = ControllerFactory(
  LikesAndDislikespaths,
  productLikesService
);

// const GetLikesAndDislikesServices = (serviceName, data, next, cb) => {
//   return productLikesService[serviceName](
//     data,
//     next,
//     (err, statusCode, data, message) => {
//       cb({ err, statusCode, data, message });
//     }
//   );
// };

// const ProductLikesController = LikesAndDislikespaths.reduce(
//   (controllers, { controller, service }) => {
//     controllers[controller] = async (req, res, next) => {
//       const roles = req.roles;
//       GetLikesAndDislikesServices(
//         service,
//         { body: req.body, id: req.params.id || "", roles },
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

module.exports = ProductLikesController;
