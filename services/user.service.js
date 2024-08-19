const Model = require("../models/models");
const { AddUserDTO, GetUserDTO } = require("../DTO/user.dto");
const jwt = require("jsonwebtoken");
const checkDuplicates = require("../utils/checkDuplicates");
const query = require("../DB/queries/index");

const UserServices = () => {
  const userLogin = async (data, next, cb) => {
    try {
      const user = await Model.User.findOne(data);
      console.log("user : ", user);
      if (user) {
        const token = await jwt.sign(
          JSON.stringify(user),
          process.env.JWT_TOKEY_KEY
        );
        cb(false, 200, { ...user, token }, "User login successfully!");
      } else {
        cb(false, 200, [], "User login failed!");
      }
    } catch (err) {
      next(err);
    }
  };

  const addUser = async (data, next, cb) => {
    try {
      const isUsernameExist = await checkDuplicates(
        "User",
        "username",
        data.username
      );
      console.log("isUsernameExist : ", isUsernameExist);
      if (isUsernameExist) {
        cb(true, 409, isUsernameExist, "Username is exist!");
        return;
      }
      const user = await new Model.User(new AddUserDTO(data));
      if (user) {
        const result = await user.save();
        if (result) {
          cb(false, 200, result, "User added successfully!");
        } else {
          cb(true, 400, [], "User added failed!");
        }
      }
    } catch (err) {
      console.log("ERROR : ", err);
      next(err);
    }
  };

  const getUsers = async (data, next, cb) => {
    try {
      const roles = data;
      const users = await Model.User.aggregate(query.userQuery("GetUsers"));
      if (users.length) {
        const usersData = GetUserDTO.fromArray(users, roles);
        const finalData = usersData.map((userDTO) => userDTO.toObject());
        cb(false, 200, finalData, "All users fetched successfully!");
      } else {
        cb(false, 200, [], "Users not availible!");
      }
    } catch (err) {
      next(err);
    }
  };

  const getUserById = async (data, next, cb) => {
    try {
      const { id, roles } = data;
      const user = await Model.User.findById(id);
      if (user) {
        cb(
          false,
          200,
          new GetUserDTO(user, roles),
          "User fetched successfully!"
        );
      } else {
        cb(false, 200, [], "User not availible!");
      }
    } catch (err) {
      next(err);
    }
  };

  const updateUser = async (data, next, cb) => {
    try {
      const { id, userUpdatedData } = data;
      const user = await Model.User.updateOne(
        query.userQuery("UpdateUser", userUpdatedData, id)
      );
      if (user) {
        cb(false, 200, user, "User updated successfully!");
      } else {
        cb(true, 204, [], "User not updated!");
      }
    } catch (err) {
      next(err);
    }
  };

  const deletedUser = async (data, next, cb) => {
    try {
      const { id } = data;
      const user = await Model.User.deleteOne({ _id: id });
      if (user) {
        cb(false, 200, user, "User deleted successfully!");
      } else {
        cb(true, 204, [], "User not deleted!");
      }
    } catch (err) {
      next(err);
    }
  };

  const addNewRoles = async (data, next, cb) => {
    try {
      const { id, roles, rolesArr } = data;
      const foundedUser = await Model.User.findById(id);
      if (foundedUser) {
        const updatedRoles = foundedUser.roles.concat(rolesArr);
        const isRolesUpdated = await Model.User.updateOne(
          { _id: id },
          {
            $set: { ...new AddUserDTO(foundedUser), roles: updatedRoles },
            $currentDate: { lastUpdated: true },
          }
        );
        if (isRolesUpdated) {
          cb(false, 200, isRolesUpdated, "User fetched successfully!");
        } else {
          cb(false, 200, [], "Roles updation failed availible!");
        }
      } else {
        cb(false, 200, [], "User not availible!");
      }
    } catch (err) {
      next(err);
    }
  };

  const deleteRoles = async (data, next, cb) => {
    try {
      const { id, roles, roleIds } = data;
      const foundedUser = await Model.User.findById(id);
      if (foundedUser) {
        const filteredRole = foundedUser.roles.filter(
          (item) => !roleIds.includes(item.id)
        );
        const isRolesUpdated = await Model.User.updateOne(
          { _id: id },
          {
            $set: { ...new AddUserDTO(foundedUser), roles: filteredRole },
            $currentDate: { lastUpdated: true },
          }
        );
        if (isRolesUpdated) {
          cb(false, 200, isRolesUpdated, "User fetched successfully!");
        } else {
          cb(false, 200, [], "Roles updation failed availible!");
        }
      } else {
        cb(false, 200, [], "User not availible!");
      }
    } catch (err) {
      next(err);
    }
  };

  return {
    addUser,
    getUsers,
    getUserById,
    updateUser,
    deletedUser,
    userLogin,
    addNewRoles,
    deleteRoles,
  };
};

module.exports = UserServices();
