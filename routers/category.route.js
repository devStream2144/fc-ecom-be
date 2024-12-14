// const express = require("express");
// const router = express.Router();
// const validation = require("../middleware/schemaValidation");
// const categoryController = require("../controllers/category.controller");
// const { CategoriesPaths } = require("../statics/paths");
// const authenticator = require("../middleware/authenticator");
// const validator = require("../middleware/schemaValidation");

// CategoriesPaths.forEach(({ controller, method, path, auth, valid }) => {
//   const options = [];
//   if (auth) {
//     options.push(authenticator);
//   }
//   if (valid) {
//     options.push(validator);
//   }
//   router[method](path, ...options, categoryController[controller]);
// });

// module.exports = router;

const createRouter = require("../routers/routerFactory.js");
const Controller = require("../controllers/category.controller.js");

const CategoriesPaths = [
  {
    controller: "AddCategory",
    service: "addCategory",
    method: "post",
    path: "/",
    auth: true,
    valid: true,
    /**
     * @swagger
     * /category:
     *   post:
     *     summary: Add a new category
     *     tags: [Category]
     *     security:
     *       - ApiKeyAuth: []  # Requires token authentication
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *            schema:
     *             $ref: '#/components/schemas/Category'
     *     responses:
     *       201:
     *         description: Category created successfully
     *       400:
     *         description: Invalid input
     */
  },
  {
    controller: "GetCategories",
    service: "getCategories",
    method: "get",
    path: "/",
    auth: true,
    valid: false,
    /**
     * @swagger
     * /category:
     *   get:
     *     summary: Get all categories
     *     tags: [Category]
     *     security:
     *       - ApiKeyAuth: []  # Requires token authentication
     *     responses:
     *       200:
     *         description: List of categories
     *       401:
     *         description: Unauthorized
     *     deprecated: false
     */
  },
  {
    controller: "GetCategoryById",
    service: "getCategoryById",
    method: "get",
    path: "/:id",
    auth: true,
    valid: false,
    /**
     * @swagger
     * /category/{id}:
     *   get:
     *     summary: Get category by ID
     *     tags: [Category]
     *     security:
     *       - ApiKeyAuth: []  # Requires token authentication
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the category
     *     responses:
     *       200:
     *         description: Category retrieved successfully
     *       404:
     *         description: Category not found
     *       401:
     *         description: Unauthorized
     *     deprecated: false
     */
  },
  {
    controller: "UpdateCategory",
    service: "updateCategory",
    method: "patch",
    path: "/:id",
    auth: true,
    valid: true,
    /**
     * @swagger
     * /category/{id}:
     *   patch:
     *     summary: Update an existing category
     *     tags: [Category]
     *     security:
     *       - ApiKeyAuth: []  # Requires token authentication
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the category to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Category'
     *     responses:
     *       200:
     *         description: Category updated successfully
     *       400:
     *         description: Invalid input
     *       404:
     *         description: Category not found
     *       401:
     *         description: Unauthorized
     */
  },
  {
    controller: "DeletedCategory",
    service: "deletedCategory",
    method: "delete",
    path: "/:id",
    auth: true,
    valid: false,
    /**
     * @swagger
     * /category/{id}:
     *   delete:
     *     summary: Delete category by ID
     *     tags: [Category]
     *     security:
     *       - ApiKeyAuth: []  # Requires token authentication
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the category to delete
     *     responses:
     *       204:
     *         description: Category deleted successfully
     *       404:
     *         description: Category not found
     *       401:
     *         description: Unauthorized
     */
  },
];

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         category:
 *           type: string
 *           description: Product ID of product which added into the cart by the user.
 *         subcategory:
 *          type: array
 *          description: List of subcategories related to the category.
 *          items:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                description: Name of the subcategory.
 *                nullable: true # Since required: false in MongoDB
 *       required:
 *         - userId
 *         - productId
 */

const controller = Controller(CategoriesPaths);

const route = createRouter(CategoriesPaths, controller);

module.exports = route;

/**
 * @swagger
 * tags:
 *   name: Category
 *   description: API for managing categories
 */
