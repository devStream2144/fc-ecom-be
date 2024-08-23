const Model = require("../models/models");
const { GetCategoryDTO, AddCategoryDTO } = require("../DTO/category.dto.js");

const CategoryService = () => {
  const addCategory = async (data, next, cb) => {
    try {
      const { body } = data;
      const category = await new Model.Category(new AddCategoryDTO(body));
      if (category) {
        const result = await category.save();
        if (result) {
          cb(false, 200, result, "Category added successfully!");
        } else {
          cb(true, 400, [], "Category added failed!");
        }
      }
    } catch (err) {
      next(err);
    }
  };

  const getCategories = async (data, next, cb) => {
    try {
      const categories = await Model.Category.find();
      if (categories.length) {
        cb(false, 200, categories, "All categories fetched successfully!");
      } else {
        cb(false, 200, [], "Categories not availible!");
      }
    } catch (err) {
      next(err);
    }
  };

  const getCategoryById = async (data, next, cb) => {
    try {
      const { id } = data;
      const category = await Model.Category.findById(id);
      if (category) {
        cb(
          false,
          200,
          new GetCategoryDTO(category),
          "Category fetched successfully!"
        );
      } else {
        cb(false, 200, [], "Category not availible!");
      }
    } catch (err) {
      next(err);
    }
  };

  const updateCategory = async (data, next, cb) => {
    try {
      const { id, body } = data;
      const category = await Model.Category.updateOne(
        { _id: id },
        {
          $set: body,
          $currentDate: { lastUpdated: true },
        }
      );
      if (category) {
        cb(false, 200, category, "Category updated successfully!");
      } else {
        cb(true, 204, [], "Category not updated!");
      }
    } catch (err) {
      next(err);
    }
  };

  const deletedCategory = async (data, next, cb) => {
    try {
      const { id } = data;
      const category = await Model.Category.deleteOne({ _id: id });
      if (category) {
        cb(false, 200, category, "Category deleted successfully!");
      } else {
        cb(true, 204, [], "Category not deleted!");
      }
    } catch (err) {
      next(err);
    }
  };

  return {
    addCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deletedCategory,
  };
};

module.exports = CategoryService();
