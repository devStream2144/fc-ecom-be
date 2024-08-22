const Model = require("../models/models");
const { AddUserProfileDTO } = require("../DTO/userProfile.dto");

const UserProfileServices = () => {
  const addUserProfile = async (data, next, cb) => {
    const { body } = data;
    try {
      const userProfile = await new Model.UserProfile(
        new AddUserProfileDTO(body)
      );
      if (userProfile) {
        const result = await userProfile.save();
        if (result) {
          cb(false, 200, result, "User profile added successfully!");
        } else {
          cb(true, 400, [], "User profile added failed!");
        }
      }
    } catch (err) {
      console.log("ERROR : ", err);
      next(err);
    }
  };

  const updateUserProfile = async (data, next, cb) => {
    try {
      const { id, body } = data;
      const userProfile = await Model.UserProfile.updateOne(
        { _id: id },
        {
          $set: new AddUserProfileDTO(body),
          $currentDate: { lastUpdated: true },
        }
      );
      if (userProfile) {
        cb(false, 200, userProfile, "User profile updated successfully!");
      } else {
        cb(true, 204, [], "User profile not updated!");
      }
    } catch (err) {
      next(err);
    }
  };

  return {
    addUserProfile,
    updateUserProfile,
  };
};

module.exports = UserProfileServices();
