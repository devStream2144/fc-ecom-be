const ProductsService = require("../services/product.service");
const { productPaths } = require("../statics/paths");

const GetProductServices = (serviceName, data, next, cb) => {
  return ProductsService[serviceName](
    data,
    next,
    (err, statusCode, data, message) => {
      cb({ err, statusCode, data, message });
    }
  );
};

const ProductController = productPaths.reduce(
  (controllers, { controller, service }) => {
    controllers[controller] = async (req, res, next) => {
      GetProductServices(
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

module.exports = ProductController;
