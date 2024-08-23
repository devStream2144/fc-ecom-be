const CategoryService = require("../services/category.service");
const { categoriesPaths } = require("../statics/paths");

const GetCategoryServices = (serviceName, data, next, cb) => {
  return CategoryService[serviceName](
    data,
    next,
    (err, statusCode, data, message) => {
      cb({ err, statusCode, data, message });
    }
  );
};

const CategoryController = categoriesPaths.reduce(
  (controllers, { controller, service }) => {
    controllers[controller] = async (req, res, next) => {
      GetCategoryServices(
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

module.exports = CategoryController;
