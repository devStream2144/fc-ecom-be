const createRouter = require("../routers/routerFactory.js");
const Controller = require("../controllers/cart.controller.js");

const CartsPaths = [
  {
    controller: "AddToCart",
    service: "addToCart",
    method: "post",
    path: "/",
    auth: true,
    valid: true,
    /**
     * @swagger
     * /cart/:
     *   post:
     *     summary: Add product to cart
     *     tags: [Carts]
     *     security:
     *       - ApiKeyAuth: []  # Requires token authentication
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Cart'
     *     responses:
     *       201:
     *         description: Product added to cart successfully
     *       400:
     *         description: Invalid input
     */
  },
  {
    controller: "GetCartItemByUser",
    service: "getCartItemByUser",
    method: "get",
    path: "/:id",
    auth: true,
    valid: false,
    /**
     * @swagger
     * /cart/{id}:
     *   get:
     *     summary: Retrieve a cart items by user
     *     tags: [Carts]
     *     security:
     *       - ApiKeyAuth: []  # Requires token authentication
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the user
     *     responses:
     *       200:
     *         description: Cart data
     *       404:
     *         description: Cart not found
     */
  },
  {
    controller: "RemoveItemFromCart",
    service: "removeItemFromCart",
    method: "delete",
    path: "/:id",
    auth: true,
    valid: false,
    /**
     * @swagger
     * /cart/{id}:
     *   delete:
     *     summary: Delete cart items by id
     *     tags: [Carts]
     *     security:
     *       - ApiKeyAuth: []  # Requires token authentication
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: ID of the user
     *     responses:
     *       200:
     *         description: Cart data
     *       404:
     *         description: Cart not found
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
 *     Cart:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *           description: ID of the uesr which is related to the cart item.
 *         productId:
 *           type: string
 *           description: Product ID of product which added into the cart by the user.
 *         isDeleted:
 *           type: boolean
 *           description: If product removed from cart
 *       required:
 *         - userId
 *         - productId
 */

/**
 * @swagger
 * tags:
 *   name: Carts
 *   description: API for managing carts
 */

const controller = Controller(CartsPaths);

const route = createRouter(CartsPaths, controller);

module.exports = route;
