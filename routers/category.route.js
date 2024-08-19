const express = require("express");
const router = express.Router();
const validation = require("../middleware/schemaValidation");
const categoryController = require("../controllers/category.controller");

router.post("/", validation, categoryController.AddCategory);
router.get("/", categoryController.GetCategories);
router.get("/:id", categoryController.GetCategoryById);
router.patch("/:id", categoryController.UpdateCategory);
router.delete("/:id", categoryController.DeletedCategory);

module.exports = router;
