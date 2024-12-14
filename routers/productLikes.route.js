const createRouter = require("../routers/routerFactory.js");
const Controller = require("../controllers/product.controller.js");

const LikesAndDislikespaths = [
  {
    controller: "DoLikeOrDisLike",
    service: "doLikeOrDisLike",
    method: "post",
    path: "/",
    auth: false,
    valid: true,
    /**
     * @swagger
     * /product-likes:
     *   post:
     *     summary: Do Liked or Disliked
     *     tags: [ProductLikesAndDislikes]
     *     security: []
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               userId:
     *                 type: string
     *                 description: The ID of the user
     *               productId:
     *                 type: string
     *                 description: The ID of the product
     *               liked:
     *                 type: boolean
     *                 description: Whether the product is liked
     *               disliked:
     *                 type: boolean
     *                 description: Whether the product is disliked
     *               isDeleted:
     *                 type: boolean
     *                 description: Whether the product like/dislike entry is deleted
     *             example:
     *               userId: "user123"
     *               productId: "product456"
     *               liked: true
     *               disliked: false
     *               isDeleted: false
     *     responses:
     *       201:
     *         description: Liked and Disliked successfully
     *       400:
     *         description: Invalid input
     */
  },
  {
    controller: "GetProductLikesAndDislikedOfProduct",
    service: "getProductLikesAndDislikesOfProduct",
    method: "get",
    path: "/:productId",
    auth: false,
    valid: false,
    /**
     * @swagger
     * /product-likes/{id}:
     *   get:
     *     summary: Retrieve a product likes and dislikes by ID
     *     tags: [ProductLikesAndDislikes]
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
    controller: "RemoveProductLikeOrDislike",
    service: "removeProductLikeOrDislike",
    method: "delete",
    path: "/",
    auth: false,
    valid: false,
  },
];

const controller = Controller(LikesAndDislikespaths);

const route = createRouter(LikesAndDislikespaths, controller);

module.exports = route;
