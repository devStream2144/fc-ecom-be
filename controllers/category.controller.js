const CategoryService = require("../services/category.service");

const CategoryController = {
  AddCategory: (req, res, next) => {
    const data = req.body;
    console.log("Data controller : ", data);
    CategoryService.addCategory(
      data,
      next,
      (err, statusCode, data, message) => {
        res.status(statusCode).json({ err: err, data: data, message });
      }
    );
  },

  GetCategories: (req, res, next) => {
    const data = req.body;
    CategoryService.getCategories(
      null,
      next,
      (err, statusCode, data, message) => {
        res.status(statusCode).json({ err: err, data: data, message });
      }
    );
  },

  GetCategoryById: (req, res, next) => {
    const id = req.params.id;
    CategoryService.getCategoryById(
      { id },
      next,
      (err, statusCode, data, message) => {
        res.status(statusCode).json({ err: err, data: data, message });
      }
    );
  },

  UpdateCategory: (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    CategoryService.updateCategory(
      { id, categoryUpdatedData: data },
      next,
      (err, statusCode, data, message) => {
        res.status(statusCode).json({ err: err, data: data, message });
      }
    );
  },

  DeletedCategory: (req, res, next) => {
    const id = req.params.id;
    CategoryService.deletedCategory(
      { id },
      next,
      (err, statusCode, data, message) => {
        res.status(statusCode).json({ err: err, data: data, message });
      }
    );
  },
};

module.exports = CategoryController;
