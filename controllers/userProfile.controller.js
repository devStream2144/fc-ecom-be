const UserProfileService = require("../services/userProfile.service");

const UserProfileController = {
  AddUserProfile: (req, res, next) => {
    const data = req.body;
    UserProfileService.addUserProfile(
      data,
      next,
      (err, statusCode, data, message) => {
        res.status(statusCode).json({ err: err, data: data, message });
      }
    );
  },

  UpdateUserProfile: (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    UserProfileService.updateUserProfile(
      { id, userProfileUpdatedData: data },
      next,
      (err, statusCode, data, message) => {
        res.status(statusCode).json({ err: err, data: data, message });
      }
    );
  },
};

module.exports = UserProfileController;
