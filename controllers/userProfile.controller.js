const UserProfileService = require("../services/userProfile.service");
const { UserProfilepath } = require("../statics/paths");
const ControllerFactory = require("../controllers/controllerFactory");

const UserProfileController = ControllerFactory(
  UserProfilepath,
  UserProfileService
);

// const GetUserProfileServices = (serviceName, data, next, cb) => {
//   return UserProfileService[serviceName](
//     data,
//     next,
//     (err, statusCode, data, message) => {
//       cb({ err, statusCode, data, message });
//     }
//   );
// };

// const UserProfileController = UserProfilepath.reduce(
//   (controllers, { controller, service }) => {
//     controllers[controller] = async (req, res, next) => {
//       GetUserProfileServices(
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

module.exports = UserProfileController;
