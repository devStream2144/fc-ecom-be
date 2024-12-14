const UserService = require("../services/user.service");
const ControllerFactory = require("../controllers/controllerFactory");

const Controller = (Paths) => {
  const controller = ControllerFactory(Paths, UserService);
  return controller;
};

module.exports = Controller;
