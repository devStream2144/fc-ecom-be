const CartService = require("../services/cart.service");
const { CartsPaths } = require("../statics/paths");

const GetCartServices = (serviceName, data, next, cb) => {
  return CartService[serviceName](
    data,
    next,
    (err, statusCode, data, message) => {
      cb({ err, statusCode, data, message });
    }
  );
};

const CartController = CartsPaths.reduce(
  (controllers, { controller, service }) => {
    controllers[controller] = async (req, res, next) => {
      GetCartServices(
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

module.exports = CartController;
