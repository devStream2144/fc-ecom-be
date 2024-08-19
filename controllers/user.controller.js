const UserService = require("../services/user.service");

const UserController = {
  AddUser: (req, res, next) => {
    const data = req.body;
    UserService.addUser(data, next, (err, statusCode, data, message) => {
      res.status(statusCode).json({ err: err, data: data, message });
    });
  },

  GetUsers: (req, res, next) => {
    const data = req.roles;
    UserService.getUsers(data, next, (err, statusCode, data, message) => {
      res.status(statusCode).json({ err: err, data: data, message });
    });
  },

  UserLogin: (req, res, next) => {
    const data = req.body;
    UserService.userLogin(data, next, (err, statusCode, data, message) => {
      res.status(statusCode).json({ err: err, data: data, message });
    });
  },

  GetUserById: (req, res, next) => {
    const id = req.params.id;
    const roles = req.roles;
    UserService.getUserById(
      { id, roles },
      next,
      (err, statusCode, data, message) => {
        res.status(statusCode).json({ err: err, data: data, message });
      }
    );
  },

  UpdateUser: (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    UserService.updateUser(
      { id, userUpdatedData: data },
      next,
      (err, statusCode, data, message) => {
        res.status(statusCode).json({ err: err, data: data, message });
      }
    );
  },

  DeletedUser: (req, res, next) => {
    const id = req.params.id;
    UserService.deletedUser({ id }, next, (err, statusCode, data, message) => {
      res.status(statusCode).json({ err: err, data: data, message });
    });
  },

  AddNewRoles: (req, res, next) => {
    const id = req.params.id;
    const roles = req.roles;
    const rolesArr = req.body;
    UserService.addNewRoles(
      { id, roles, rolesArr },
      next,
      (err, statusCode, data, message) => {
        res.status(statusCode).json({ err: err, data: data, message });
      }
    );
  },

  DeleteRoles: (req, res, next) => {
    const id = req.params.id;
    const roles = req.roles;
    const roleIds = req.body;
    UserService.deleteRoles(
      { id, roles, roleIds },
      next,
      (err, statusCode, data, message) => {
        res.status(statusCode).json({ err: err, data: data, message });
      }
    );
  },
};

module.exports = UserController;
