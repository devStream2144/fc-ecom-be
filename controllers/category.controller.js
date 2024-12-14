const CategoryService = require("../services/category.service");
const ControllerFactory = require("../controllers/controllerFactory");

const Controller = (Paths) => {
  const controller = ControllerFactory(Paths, CategoryService);
  return controller;
};

module.exports = Controller;

// const CategoryService = require("../services/category.service");
// const { CategoriesPaths } = require("../statics/paths");

// const ControllerFactory = require("../controllers/controllerFactory");

// const CategoryController = ControllerFactory(CategoriesPaths, CategoryService);

// const GetCategoryServices = (serviceName, data, next, cb) => {
//   return CategoryService[serviceName](
//     data,
//     next,
//     (err, statusCode, data, message) => {
//       cb({ err, statusCode, data, message });
//     }
//   );
// };

// const CategoryController = CategoriesPaths.reduce(
//   (controllers, { controller, service }) => {
//     controllers[controller] = async (req, res, next) => {
//       GetCategoryServices(
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

// module.exports = CategoryController;
