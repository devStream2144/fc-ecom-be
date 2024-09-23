const UserService = require("../services/user.service");
const { UserPaths } = require("../statics/paths");
const ControllerFactory = require("../controllers/controllerFactory");

const UserController = ControllerFactory(UserPaths, UserService);

// const GetUserServices = (serviceName, data, next, cb) => {
//   return UserService[serviceName](
//     data,
//     next,
//     (err, statusCode, data, message) => {
//       cb({ err, statusCode, data, message });
//     }
//   );
// };

// const UserController = UserPaths.reduce(
//   (controllers, { controller, service }) => {
//     controllers[controller] = async (req, res, next) => {
//       GetUserServices(
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

module.exports = UserController;
