const createRouter = require("../routers/routerFactory.js");
const Controller = require("../controllers/product.controller.js");

const ProductPaths = [
  {
    controller: "AddProduct",
    service: "addProduct",
    method: "post",
    path: "/",
    auth: false,
    valid: true,
    /**
     * @swagger
     * /product:
     *   post:
     *     summary: Add a new product
     *     tags: [Products]
     *     security: []
     *     responses:
     *       201:
     *         description: Product created successfully
     *       400:
     *         description: Invalid input
     */
  },
  {
    controller: "GetProducts",
    service: "getProducts",
    method: "get",
    path: "/",
    auth: true,
    valid: false,
    /**
     * @swagger
     * /product:
     *   get:
     *     summary: Retrieve all product
     *     tags: [Products]
     *     security:
     *       - ApiKeyAuth: []  # Requires token authentication
     *     responses:
     *       200:
     *         description: Product data
     *       404:
     *         description: Product not found
     */
  },
  {
    controller: "GetProductById",
    service: "getProductById",
    method: "get",
    path: "/:id",
    auth: true,
    valid: false,
    /**
     * @swagger
     * /product/{id}:
     *   get:
     *     summary: Retrieve a product by ID
     *     tags: [Products]
     *     security:
     *       - ApiKeyAuth: []  # Requires token authentication
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the product
     *     responses:
     *       200:
     *         description: Product data
     *       404:
     *         description: Product not found
     */
  },
  {
    controller: "UpdateProduct",
    service: "updateProduct",
    method: "patch",
    path: "/:id",
    auth: true,
    valid: false,
    /**
     * @swagger
     * /product/{id}:
     *   patch:
     *     summary: Update a product
     *     tags: [Products]
     *     security:
     *       - ApiKeyAuth: []  # Requires token authentication
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the product to update
     *     requestBody:
     *       description: Updated product data
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *     responses:
     *       200:
     *         description: Product updated successfully
     *       400:
     *         description: Invalid input
     */
  },
  {
    controller: "DeleteProduct",
    service: "deleteProduct",
    method: "delete",
    path: "/:id",
    auth: true,
    valid: false,
    /**
     * @swagger
     * /product/{id}:
     *   delete:
     *     summary: Delete a product by ID
     *     tags: [Products]
     *     security:
     *       - ApiKeyAuth: []  # Requires token authentication
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the product to delete
     *     responses:
     *       200:
     *         description: Product deleted successfully
     *       404:
     *         description: Product not found
     */
  },
  {
    controller: "UploadProductImages",
    service: "uploadProductImages",
    method: "patch",
    path: "/upload-images/:id",
    auth: false,
    valid: false,
    /**
     * @swagger
     * /product/upload-images/{id}:
     *   patch:
     *     summary: Upload images for a product
     *     tags: [Products]
     *     security: []
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the product
     *     requestBody:
     *       description: Array of images to upload
     *       required: true
     *       content:
     *         multipart/form-data:
     *           schema:
     *             type: object
     *             properties:
     *               image:
     *                 type: array
     *                 items:
     *                   type: string
     *                   format: binary
     *     responses:
     *       200:
     *         description: Images uploaded successfully
     *       400:
     *         description: Invalid input
     */
  },
];

const controller = Controller(ProductPaths);

const route = createRouter(ProductPaths, controller);

module.exports = route;

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API for managing products
 */
