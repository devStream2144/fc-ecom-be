const UserProfileService = require("../services/userProfile.service");
const { userProfilepath } = require("../statics/paths");

const GetUserProfileServices = (serviceName, data, next, cb) => {
  return UserProfileService[serviceName](
    data,
    next,
    (err, statusCode, data, message) => {
      cb({ err, statusCode, data, message });
    }
  );
};

const UserProfileController = userProfilepath.reduce(
  (controllers, { controller, service }) => {
    controllers[controller] = async (req, res, next) => {
      GetUserProfileServices(
        service,
        {
          body: req.body || {},
          id: req.params.id || "",
          roles: req.roles || [],
        },
        next,
        (response) => {
          res.status(response.statusCode).json({
            err: response.err,
            data: response.data,
            message: response.message,
          });
        }
      );
    };
    return controllers;
  },
  {}
);

// const UserProfileController = {
//   AddUserProfile: (req, res, next) => {
//     const data = req.body;
//     UserProfileService.addUserProfile(
//       data,
//       next,
//       (err, statusCode, data, message) => {
//         res.status(statusCode).json({ err: err, data: data, message });
//       }
//     );
//   },

//   UpdateUserProfile: (req, res, next) => {
//     const id = req.params.id;
//     const data = req.body;
//     UserProfileService.updateUserProfile(
//       { id, userProfileUpdatedData: data },
//       next,
//       (err, statusCode, data, message) => {
//         res.status(statusCode).json({ err: err, data: data, message });
//       }
//     );
//   },
// };

module.exports = UserProfileController;
