const createRouter = require("../routers/routerFactory.js");
const Controller = require("../controllers/order.controller.js");

const OrderPaths = [
  {
    controller: "CreateOrder",
    service: "createOrder",
    method: "post",
    path: "/",
    auth: true,
    valid: false,
    /**
     * @swagger
     * /order:
     *   post:
     *     tags[Order]:
     *     security:
     *      - ApiKeyAuth: []  # Requires token authentication
     *     summary: Create an order
     *     description: Create a new order.
     *     operationId: createOrder
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Order'
     *     responses:
     *       201:
     *         description: Order created successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Order'
     *       400:
     *         description: Bad request
     */
  },
  {
    controller: "GetOrders",
    service: "getOrders",
    method: "get",
    path: "/",
    auth: true,
    valid: false,
    /**
     * @swagger
     * /order:
     *   get:
     *     tags[Order]:
     *     security:
     *      - ApiKeyAuth: []  # Requires token authentication
     *     summary: Get all orders
     *     description: Retrieve a list of all orders.
     *     operationId: getOrders
     *     responses:
     *       200:
     *         description: Successful response
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Order'
     *       401:
     *         description: Unauthorized
     */
  },
  {
    controller: "GetOrder",
    service: "getOrder",
    method: "get",
    path: "/:id",
    auth: true,
    valid: false,
    /**
     * @swagger
     * /order/{id}:
     *   get:
     *     tags[Order]:
     *     security:
     *      - ApiKeyAuth: []  # Requires token authentication
     *     summary: Get an order by ID
     *     description: Retrieve a specific order by its ID.
     *     operationId: getOrder
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Successful response
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Order'
     *       404:
     *         description: Order not found
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
 *     Order:
 *       type: object
 *       required:
 *         - userId
 *         - total_amount
 *       properties:
 *         userId:
 *           type: string
 *           description: ID of the user placing the order.
 *         productId:
 *           type: string
 *           description: ID of the product being ordered.
 *         order_date:
 *           type: string
 *           format: date-time
 *           description: Date when the order was placed.
 *         total_amount:
 *           type: number
 *           description: Total amount for the order.
 *         status:
 *           type: string
 *           enum:
 *             - Pending
 *             - Completed
 *             - Cancelled
 *             - Shipped
 *           description: Status of the order.
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Date when the order was created.
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: Date when the order was last updated.
 */

const controller = Controller(OrderPaths);

const route = createRouter(OrderPaths, controller);

module.exports = route;
